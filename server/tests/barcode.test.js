const app = require('../index.js');
const { User, Hotplace, Barcode, UserBarcode, sequelize } = require('../models');
const request = require('supertest');
const { queryInterface } = sequelize;
const jwt = require('jsonwebtoken');
require('dotenv').config()

describe('Barcode test', () => {
  let userToken;
  let userId;
  let userHotPlace;
  let hotplaceBarcode;

  const userData = {
    no_ktp: '12345678',
    name: 'males',
    phone: '0122233333',
    email: 'males@mail.com',
    password: 'rahasia',
  }
  const userLogin = {
    email: 'males@mail.com',
    password: 'rahasia'
  }
  const hotPlace = {
    name: 'toko kita',
    type: 'store',
    address: 'taman mini, jakarta',
    phone: '081111111',
    barcode_url: 'google.com',
    // UserId: userId
  }

  describe('POST /hotplace - edit user', () => {
    beforeAll(done => {
      User.create(userData)
        .then(user => {
          userToken = jwt.sign({
            userId: user.id,
            userEmail: user.email
          }, process.env.TOKEN_KEY)
          userId = user.id
          return Hotplace.create(hotPlace)
        })
        .then(hotplace => {
          userHotPlace = hotplace
          return Barcode.create({
            name: hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode => {
          hotplaceBarcode = barcode
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes',{}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('201 succes create hotplace', (done) => {
      request(app)
        .post('/hotplace')
        .set('access_token', userToken)
        .send(hotPlace)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(201);
          done()
        })
    })
  })

  describe('GET /hotplace - get hotplaces', () => {
    beforeAll(done => {
      User.create(userData)
        .then(user => {
          userToken = jwt.sign({
            userId: user.id,
            userEmail: user.email
          }, process.env.TOKEN_KEY)
          userId = user.id
          return Hotplace.create(hotPlace)
        })
        .then(hotplace => {
          userHotPlace = hotplace
          return Barcode.create({
            name: hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode => {
          hotplaceBarcode = barcode
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes',{}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 succes get hotplaces', (done) => {
      request(app)
        .get('/hotplace')
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })
  })
  
  describe('GET /hotplace/:id - get hotplace barcode by id', () => {
    beforeAll(done => {
      User.create(userData)
        .then(user => {
          userToken = jwt.sign({
            userId: user.id,
            userEmail: user.email
          }, process.env.TOKEN_KEY)
          userId = user.id
          return Hotplace.create(hotPlace)
        })
        .then(hotplace => {
          userHotPlace = hotplace
          return Barcode.create({
            name: hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode => {
          hotplaceBarcode = barcode
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes',{}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 succes get barcode by id', (done) => {
      request(app)
        .get('/hotplace/'+hotplaceBarcode.id)
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })

    test('404 hotplace not found', (done) => {
      request(app)
        .get('/hotplace/123123123')
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
  })

  describe('DELETE /hotplace/:id - delete hotpalce by id', () => {
    beforeAll(done => {
      User.create(userData)
        .then(user => {
          userToken = jwt.sign({
            userId: user.id,
            userEmail: user.email
          }, process.env.TOKEN_KEY)
          userId = user.id
          hotPlace.UserId = user.id
          return Hotplace.create(hotPlace)
        })
        .then(hotplace => {
          userHotPlace = hotplace
          return Barcode.create({
            name: hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode => {
          hotplaceBarcode = barcode
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes',{}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 succes deleted hotplace by id', (done) => {
      request(app)
        .delete('/hotplace/'+userHotPlace.id)
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })
    test('404 hotplace not found', (done) => {
      request(app)
        .delete('/hotplace/123412412')
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
  })

  describe('GET /download/:id - download barcode', () => {
    beforeAll(done => {
      User.create(userData)
        .then(user => {
          userToken = jwt.sign({
            userId: user.id,
            userEmail: user.email
          }, process.env.TOKEN_KEY)
          userId = user.id
          return Hotplace.create(hotPlace)
        })
        .then(hotplace => {
          userHotPlace = hotplace
          return Barcode.create({
            name: hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode => {
          hotplaceBarcode = barcode
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes',{}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 succes deleted hotplace by id', (done) => {
      request(app)
        .get('/hotplace/'+hotplaceBarcode.id)
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })
  })
})
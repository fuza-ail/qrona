const app = require('../index.js');
const { User, Hotplace, Barcode, UserBarcode, sequelize } = require('../models');
const request = require('supertest');
const { queryInterface } = sequelize;
const jwt = require('jsonwebtoken');
require('dotenv').config()

describe('User checkin and out test', () => {
  let userToken;
  let userId;
  let userHotPlace;
  let hotplaceBarcode;
  let userBarcode;

  const userData = {
    no_ktp: '12345678',
    user_name: 'males',
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
    location: 'taman mini, jakarta',
    phone: '081111111',
    UserId: userId
  }

  describe('POST /checkin checkin user', () => {
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
        .then(()=> queryInterface.bulkDelete('UserBarcodes',{}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('201 success checkin', (done) => {
      request(app)
        .post('/checkin')
        .set('access_token', userToken)
        .send({
          id: hotplaceBarcode.id,
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(201);
          done()
        })
    })

    test('400 no data checkin', (done) => {
      request(app)
        .post('/checkin')
        .set('access_token', userToken)
        .send({
          id: '',
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          done()
        })
    })
  })

  describe('PUT /checkout/:id - checkout user', () => {
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
          return UserBarcode.create({
            checkin: new Date(),
            checkout: new Date(),
            BarcodeId: barcode.id,
            UserId: userId
          })
        })
        .then(barcodeData=>{
          userBarcode = barcodeData
          console.log(userBarcode)
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes',{}))
        .then(()=> queryInterface.bulkDelete('UserBarcodes',{}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 success checkout', (done) => {
      request(app)
        .put(`/checkout/${hotplaceBarcode.id}`)
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })

    test('404 no checkin', (done) => {
      request(app)
        .put(`/checkout/444444`)
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
  })
})
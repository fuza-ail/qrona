const app = require('../index.js');
const { User, Hotplace, Barcode, UserBarcode, sequelize } = require('../models');
const request = require('supertest');
const { queryInterface } = sequelize;
const jwt = require('jsonwebtoken');
require('dotenv').config()

describe('Fetch data test', () => {
  let adminToken;
  let userSatu;
  let userDua;
  let tokentwo;
  let hotplaceSatu;
  let barcodeSatu;

  const adminData = {
    no_ktp: '12345678',
    user_name: 'admin',
    email: 'admin@mail.com',
    password: 'rahasia',
    phone: '0122233333',
    type: 'admin'
  }

  const adminLogin = {
    email: 'admin@mail.com',
    password: 'rahasia'
  }

  const userOne = {
    no_ktp: '12345678232123',
    user_name: 'usertwo',
    email: 'userone@mail.com',
    password: 'rahasia',
    phone: '0122233333',
  }

  const userTwo = {
    no_ktp: '12345678123312',
    user_name: 'usertwo',
    email: 'usertwo@mail.com',
    password: 'rahasia',
    phone: '0122233333',
  }

  describe('GET /users - get all users data', () => {
    beforeAll(done => {
      User.create(adminData)
        .then(admin => {
          adminToken = jwt.sign({
            userId: admin.id,
            userEmail: admin.email
          }, process.env.TOKEN_KEY)
          return User.create(userOne)
        })
        .then(user => {
          userSatu = user
          return User.create(userTwo)
        })
        .then(newUser => {
          tokentwo = jwt.sign({
            userId: 50055,
            userEmail: 'lali@mail.com'
          },process.env.TOKEN_KEY)
          userDua = newUser
          done()
        })
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 success get all users data', (done) => {
      request(app)
        .get('/users')
        .set('access_token', adminToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })

    test('404 wrong token', (done) => {
      request(app)
        .get('/users')
        .set('access_token', tokentwo)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
  })

  describe('GET /users/:id - get user data by id', () => {
    beforeAll(done => {
      User.create(adminData)
        .then(admin => {
          adminToken = jwt.sign({
            userId: admin.id,
            userEmail: admin.email
          }, process.env.TOKEN_KEY)
          return User.create(userOne)
        })
        .then(user => {
          userSatu = user
          return User.create(userTwo)
        })
        .then(newUser => {
          userDua = newUser
          return Hotplace.create({
            name: 'ojek',
            type: 'transport',
            location: 'jalan durian,jakarata',
            phone: '082398123',
            UserId: newUser.id
          })
        })
        .then(hotplace=>{
          hotplaceSatu = hotplace
          return Barcode.create({
            name:hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode=>{
          barcodeSatu = barcode
          return UserBarcode.create({
            checkin:new Date(),
            checkout: new Date(),
            BarcodeId: barcodeSatu.id,
            UserId: userSatu.id
          })
        })
        .then(()=>done())
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes', {}))
        .then(() => queryInterface.bulkDelete('UserBarcodes', {}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 success get user data by id', (done) => {
      request(app)
        .get(`/users/${userSatu.id}`)
        .set('access_token', adminToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })

    test('404 user not found', (done) => {
      request(app)
        .get(`/users/44444`)
        .set('access_token', adminToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
  })

  describe('GET /reghotplace - get all hotplace data', () => {
    beforeAll(done => {
      User.create(adminData)
        .then(admin => {
          adminToken = jwt.sign({
            userId: admin.id,
            userEmail: admin.email
          }, process.env.TOKEN_KEY)
          return User.create(userOne)
        })
        .then(user => {
          userSatu = user
          return User.create(userTwo)
        })
        .then(newUser => {
          userDua = newUser
          return Hotplace.create({
            name: 'ojek',
            type: 'transport',
            location: 'jalan durian,jakarata',
            phone: '082398123',
            UserId: newUser.id
          })
        })
        .then(hotplace=>{
          hotplaceSatu = hotplace
          return Barcode.create({
            name:hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode=>{
          barcodeSatu = barcode
          return UserBarcode.create({
            checkin:new Date(),
            checkout: new Date(),
            BarcodeId: barcodeSatu.id,
            UserId: userSatu.id
          })
        })
        .then(()=>done())
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes', {}))
        .then(() => queryInterface.bulkDelete('UserBarcodes', {}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 success get hotplaces', (done) => {
      request(app)
        .get('/reghotplace')
        .set('access_token', adminToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })
    test('404 no access token', (done) => {
      request(app)
        .get('/reghotplace')
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
    test('404 invalid token', (done) => {
      request(app)
        .get('/reghotplace')
        .set('access_token', 'asdfwef')
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          done()
        })
    })
  })

  describe('GET /reghotplace/:id - get hotplace data by id', () => {
    beforeAll(done => {
      User.create(adminData)
        .then(admin => {
          adminToken = jwt.sign({
            userId: admin.id,
            userEmail: admin.email
          }, process.env.TOKEN_KEY)
          return User.create(userOne)
        })
        .then(user => {
          userSatu = user
          return User.create(userTwo)
        })
        .then(newUser => {
          userDua = newUser
          return Hotplace.create({
            name: 'ojek',
            type: 'transport',
            location: 'jalan durian,jakarata',
            phone: '082398123',
            UserId: newUser.id
          })
        })
        .then(hotplace=>{
          hotplaceSatu = hotplace
          return Barcode.create({
            name:hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode=>{
          barcodeSatu = barcode
          return UserBarcode.create({
            checkin:new Date(),
            checkout: new Date(),
            BarcodeId: barcodeSatu.id,
            UserId: userSatu.id
          })
        })
        .then(()=>done())
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes', {}))
        .then(() => queryInterface.bulkDelete('UserBarcodes', {}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 success get hotplaces', (done) => {
      request(app)
        .get(`/reghotplace/${hotplaceSatu.id}`)
        .set('access_token', adminToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })

    test('404 hot place not found', (done) => {
      request(app)
        .get(`/reghotplace/232323`)
        .set('access_token', adminToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
  })

  describe('PUT /users/:id - update status user', () => {
    beforeAll(done => {
      User.create(adminData)
        .then(admin => {
          adminToken = jwt.sign({
            userId: admin.id,
            userEmail: admin.email
          }, process.env.TOKEN_KEY)
          return User.create(userOne)
        })
        .then(user => {
          userSatu = user
          return User.create(userTwo)
        })
        .then(newUser => {
          userDua = newUser
          return Hotplace.create({
            name: 'ojek',
            type: 'transport',
            location: 'jalan durian,jakarata',
            phone: '082398123',
            UserId: newUser.id
          })
        })
        .then(hotplace=>{
          hotplaceSatu = hotplace
          return Barcode.create({
            name:hotplace.name,
            barcode_url: 'google.com',
            HotplaceId: hotplace.id
          })
        })
        .then(barcode=>{
          barcodeSatu = barcode
          return UserBarcode.create({
            checkin:new Date(),
            checkout: new Date(),
            BarcodeId: barcodeSatu.id,
            UserId: userSatu.id
          })
        })
        .then(()=>done())
        .catch(error => done(error))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => queryInterface.bulkDelete('Hotplaces', {}))
        .then(() => queryInterface.bulkDelete('Barcodes', {}))
        .then(() => queryInterface.bulkDelete('UserBarcodes', {}))
        .then(() => done())
        .catch(error => done(error))
    })

    test('200 success update user data', (done) => {
      request(app)
        .put('/users/'+userSatu.id)
        .set('access_token', adminToken)
        .send({
          status: 'positif'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })

    test('404 user not found', (done) => {
      request(app)
        .put('/users/6666666')
        .set('access_token', adminToken)
        .send({
          status: 'positif'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })

    test('404 user not found', (done) => {
      request(app)
        .put('/users/234234')
        .set('access_token', adminToken)
        .send({
          status: 'OTG'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404);
          done()
        })
    })
  })
})
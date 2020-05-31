const app = require('../index.js');
const { User, Hotplace, Barcode, UserBarcode, sequelize } = require('../models');
const request = require('supertest');
const { queryInterface } = sequelize;
const jwt = require('jsonwebtoken');
require('dotenv').config()

describe('User detail test', () => {
  let userToken;

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

  describe('GET /user - get user detail', () => {
    beforeAll(done => {
      User.create(userData)
        .then(user => {
          userToken = jwt.sign({
            userId: user.id,
            userEmail: user.email
          }, process.env.TOKEN_KEY)
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

    test('200 success get data', (done) => {
      request(app)
        .get('/user')
        .set('access_token', userToken)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })
  })

  describe('Edit /user - edit user', () => {
    beforeAll(done => {
      User.create(userData)
        .then(user => {
          userToken = jwt.sign({
            userId: user.id,
            userEmail: user.email
          }, process.env.TOKEN_KEY)
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

    test('200 succes update data', (done) => {
      request(app)
        .post('/user')
        .set('access_token', userToken)
        .send({ user_name: 'editedname' })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200);
          done()
        })
    })
  })
})
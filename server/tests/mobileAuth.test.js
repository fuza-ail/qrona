const app = require('../index.js');
const { User, Hotplace, Barcode, UserBarcode, sequelize } = require('../models');
const request = require('supertest');
const {queryInterface} = sequelize;

describe('User auth test',()=>{
  const userData ={
    no_ktp : '12345678',
    user_name: 'males',
    phone: '0122233333',
    email: 'males@mail.com',
    password: 'rahasia',
  }

  const userData2 ={
    no_ktp : '87654321',
    user_name: 'dudin',
    phone: '0122233333',
    email: 'dudin@mail.com',
    password: 'rahasia',
  }

  const userLogin={
    email: 'males@mail.com',
    password: 'rahasia'
  }

  const userLogin2 = {
    email: 'dudin@mail.com',
    password: 'rahasia'
  }

  describe('POST /register - create new user',()=>{
    beforeAll(done=>{
      User.create(userData2)
        .then(()=> done())
        .catch(error => done(error))
    })
    afterAll(done=>{
      queryInterface
        .bulkDelete('Users',{})
        .then(()=>done())
        .catch(error=> done(error))
    })

    test('201 success register',(done)=>{
      request(app)
        .post('/register')
        .send(userData)
        .then(response=>{
          const {body,status}= response;
          expect(status).toBe(201);
          expect(body).toHaveProperty('access_token',expect.any(String));
          done()
        })
    })
  })

  describe('POST /login - login user',()=>{
    beforeAll(done=>{
      User.create(userLogin)
        .then(()=> done())
        .catch(error => done(error))
    })
    afterAll(done=>{
      queryInterface
        .bulkDelete('Users',{})
        .then(()=>done())
        .catch(error=> done(error))
    })

    test('200 success login',(done)=>{
      request(app)
        .post('/login')
        .send(userLogin)
        .then(response=>{
          const {body,status}= response;
          expect(status).toBe(200);
          expect(body).toHaveProperty('access_token',expect.any(String));
          done()
        })
    })
  })
})
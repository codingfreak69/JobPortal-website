const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const User = require('../models/User');
const { expect } = chai;

chai.use(chaiHttp);

describe('Auth API', () => {
  before(async () => {
    // Clean up the test database before running the tests
    await User.deleteMany({});
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user', (done) => {
      const newUser = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'job-seeker',
      };

      chai.request(server)
        .post('/api/auth/register')
        .send(newUser)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('token');
          done();
        });
    });

    it('should not register a user with an existing email', (done) => {
      const existingUser = {
        name: 'Jane Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'employer',
      };

      chai.request(server)
        .post('/api/auth/register')
        .send(existingUser)
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.body).to.have.property('error');
          done();
        });
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login an existing user', (done) => {
      const user = {
        email: 'john@example.com',
        password: 'password123',
      };

      chai.request(server)
        .post('/api/auth/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          done();
        });
    });

    it('should not login a user with incorrect credentials', (done) => {
      const user = {
        email: 'john@example.com',
        password: 'wrongpassword',
      };

      chai.request(server)
        .post('/api/auth/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.have.property('error');
          done();
        });
    });
  });
});

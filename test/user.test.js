import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

describe('POST /auth/signup', () => {
  const user = {
    email: 'tammy@yahoo.co.uk',
    password: 4590,
  };
  it('should return status 201 and the user that was created', (done) => {
    chai.request(server)
      .post('/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.have.property('user');
        expect(res.body).to.have.property('user').to.be.an('object');
        expect(res.body.user).to.have.property('id');
        expect(res.body.user).to.have.property('email').to.equal('tammy@yahoo.co.uk');
        done();
      });
  });

  it('should return status 400 if all required fields are not entered', (done) => {
    chai.request(server)
      .post('/auth/signup')
      .send(user.email)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});

describe('POST /auth/signin', () => {
  const user = {
    email: 'tammy@yahoo.co.uk',
    password: 4590,
  };

  it('should return status 201 and the user that was created', (done) => {
    chai.request(server)
      .post('/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.have.property('user');
        expect(res.body).to.have.property('user').to.be.an('object');
        expect(res.body.user).to.have.property('id');
        expect(res.body.user).to.have.property('email').to.equal('tammy@yahoo.co.uk');
        done();
      });
  });

  it('should return status 400 if all required fields are not entered', (done) => {
    chai.request(server)
      .post('/auth/signin')
      .send(user.email)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });

  it('should return status 400 if no user with the given enail is found', (done) => {
    chai.request(server)
      .post('/auth/signin')
      .send({
        email: 'tammy@yahoo.co.uk',
        password: 11111,
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});

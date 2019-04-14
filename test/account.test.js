import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const account = {
  accountNumber: 6382,
  accountType: 'savings',
};

describe('POST /accounts', () => {
  it('should return status 201 and the account that was created', (done) => {
    chai.request(server)
      .post('/accounts')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.have.property('account');
        expect(res.body).to.have.property('account').to.be.an('object');
        expect(res.body.account).to.have.property('accountType');
        expect(res.body.account).to.have.property('accountNumber').to.equal(6382);
        done();
      });
  });

  it('should return status 400 if no account with the given email is found', (done) => {
    chai.request(server)
      .post('/accounts/00000/credit')
      .send({})
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});

describe('PATCH /account/:accountId', () => {
  it('should return status 202 and the account that was updated', (done) => {
    chai.request(server)
      .post('/account/7839')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.be.equal(202);
        expect(res.body).to.have.property('account');
        expect(res.body).to.have.property('account').to.be.an('object');
        expect(res.body.account).to.have.property('accountType');
        expect(res.body.account).to.have.property('accountNumber').to.equal(6382);
        done();
      });
  });

  it('should return status 400 if no account with the given :accountId is found', (done) => {
    chai.request(server)
      .post('/accounts/00000')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});

describe('DELETE /account/:accountId', () => {
  it('should return status 204 and the account that was deleted', (done) => {
    chai.request(server)
      .post('/account/7839')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.be.equal(204);
        expect(res.body).to.have.property('account');
        expect(res.body).to.have.property('account').to.be.an('object');
        expect(res.body.account).to.have.property('accountType');
        expect(res.body.account).to.have.property('accountNumber').to.equal(6382);
        done();
      });
  });

  it('should return status 400 if no account with the given :accountId is found', (done) => {
    chai.request(server)
      .post('/accounts/00000')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const transaction = {
  accountNumber: 6382,
  amount: 4590,
};

describe('POST  /transactions/:accountId/credit', () => {
  it('should return status 201 and the transaction that was created', (done) => {
    chai.request(server)
      .post('/transactions/10600283/credit')
      .send(transaction)
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.have.property('transaction');
        expect(res.body).to.have.property('transaction').to.be.an('object');
        expect(res.body.transaction).to.have.property('accountNumber');
        expect(res.body.transaction).to.have.property('amount').to.equal(4590);
        done();
      });
  });

  it('should return status 400 if all required fields are not inserted', (done) => {
    chai.request(server)
      .post('/transactions/00000/credit')
      .send(transaction)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});

describe('POST  /transactions/:accountId/debit', () => {
  it('should return status 201 and the transaction that was created', (done) => {
    chai.request(server)
      .post('/transactions/10600283/debit')
      .send()
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.have.property('transaction');
        expect(res.body).to.have.property('amount').to.be.an('object');
        expect(res.body.transaction).to.have.property('accountNumber');
        expect(res.body.transaction).to.have.property('amount').to.equal(4590);
        done();
      });
  });

  it('should return status 400 if no transaction with the given transaction:Id is found', (done) => {
    chai.request(server)
      .post('/transactions/00000/credit')
      .send(transaction)
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});

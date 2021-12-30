const app = require('../src/');
const supertest = require('supertest');

const request = supertest.agent(app.listen());

describe('Our amazing site', () => {
  it('has a nice welcoming message', done => {
    request
      .get('/')
      .expect('Hello World!')
      .end(done);
  });
});

import request from 'supertest';
import app from '../js/app';
describe('The server', () => {
  it('responds to /', (done) => {
    request(app)
      .get('/api/')
      .expect(200, done);
  });
});

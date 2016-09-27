import request from 'supertest';
import app from '../js/app';

describe('Sample Routes', () => {

  it('returns a nice little greeting to your app', (done) => {
    request(app)
      .post('/api/sample/helloWorld/')
      .send({'siteTitle': 'My Project'})
      .expect(200, {
        welcomeMessage: 'Welcome to My Project',
      }, done);
  });

});

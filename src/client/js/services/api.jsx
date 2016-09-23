import Request from 'superagent';

class Api {

  /**
   * Gets the hello world message from our server.
   * @return {Promise}
   */
  static getHelloMsg() {
    const payload = { siteTitle: 'My project' };
    return new Promise((resolve, reject) => {
      Request
        .post('/sample/helloWorld/')
        .send(payload)
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err) reject(err);
          resolve(JSON.parse(res.text));
        }
      );
    });
  }
}

export default Api;

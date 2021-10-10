'use strict';

const mock = require('egg-mock');

describe('test/full-alipay.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/full-alipay-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, fullAlipay')
      .expect(200);
  });
});

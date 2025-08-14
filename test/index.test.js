const http = require('http');
const assert = require('assert');

describe('basic test', function() {
  it('should respond with 200 on /health', function(done) {
    http.get({ hostname: 'localhost', port: 8080, path: '/health' }, res => {
      assert.strictEqual(res.statusCode, 200);
      done();
    }).on('error', done);
  });
});

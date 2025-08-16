// quick test-runner so we don't require Jest in CI
const child = require('child_process');
const http = require('http');

const server = child.spawn('node', ['src/index.js'], { stdio: 'inherit' });

function ping() {
  const req = http.get({ hostname: 'localhost', port: 8080, path: '/health' }, res => {
    if (res.statusCode === 200) {
      console.log('Health check OK');
      server.kill();
      process.exit(0);
    } else {
      console.error('Health check failed', res.statusCode);
      server.kill();
      process.exit(2);
    }
  });
  req.on('error', (e) => {
    console.error('Server not up yet', e.message);
    setTimeout(ping, 200);
  });
}
setTimeout(ping, 200);

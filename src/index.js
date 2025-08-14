const http = require('http');

const PORT = process.env.PORT || 8080;
const APP_NAME = process.env.APP_NAME || 'sample-js-app';
const SENSITIVE = process.env.API_KEY ? 'present' : 'missing';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('OK');
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    app: APP_NAME,
    message: 'Hello from Node.js!',
    sensitive_env: SENSITIVE
  }));
});

server.listen(PORT, () => {
  console.log(`${APP_NAME} listening on ${PORT}`);
});

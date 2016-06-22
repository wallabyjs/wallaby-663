const http = require('http');
require('chai'); //node_module dependency
const server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.write('Hello World!');
  res.end();
});

server.listen(4002);

module.exports = server;
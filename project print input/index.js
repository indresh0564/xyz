const http = require('http');
// const routes = require('./routes');
const reqHandler = require('./routes');
// console.log(routes.sometext);
const server=http.createServer(reqHandler);
server.listen(3000);
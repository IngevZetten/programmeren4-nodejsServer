//
//server.js
//
var http = require('http');

 const port = process.env.PORT || 3000;

function onRequest(request, response){
    console.log('Er was een request.');
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello World!');
    response.end();
}

http.createServer(onRequest).listen(port);

console.log('De server luistert op port ' + port);
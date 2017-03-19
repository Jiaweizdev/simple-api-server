var http = require('http');
var os = require("os");

var PORT=8080;
var hostname = os.hostname();

function handleRequest(request, response){
    response.setHeader('Jiawei-Dev-Test', 'Hello Word, Excel, Powerpoint!');
    response.end('Simple API Server by Jiawei \n' +
                 'Path Hit: ' + request.url + '\n' +
                 'Hostname: ' + hostname + '\n' +
                 'Date: ' + Date());
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
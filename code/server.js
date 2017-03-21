var http = require('http');
var url = require('url');
var route = require('./router');

function start(){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received!");

        route.route(pathname);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World2");
        response.end();
    }
    http.createServer(onRequest).listen(8000);
    console.log("server is running!");
}
exports.start = start;
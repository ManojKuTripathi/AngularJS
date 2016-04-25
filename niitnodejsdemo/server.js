/**
 * Created by Puneet on 22-Apr-16.
 */
var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response){
    console.log("Received request :");

    if(request.url == "/user/101"){
        response.writeHead(200, {"Content-type":"application/json"});
        response.end({id:101, name:'Ravi', lastName: 'Sharma'});
    }
    else{
        fs.readFile("./files/" + request.url, function(error, data){
            if(error){
                response.writeHead(404, {"Content-type":"text/plain"});
                response.end("Sorryiy the page was not found");
            } else{
                response.writeHead(200, {"Content-type":"text/html"});
                response.end(data);
            }

        })
    }


})
server.listen(3000, 'localhost', function(){
    console.log("Listening" + 'localhost' + ":" + 3000);
})
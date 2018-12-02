var http = require('http');
http.createServer(function(req, res){
    res.write("Message from Hello World Sample nodejs application.");
    res.end();
}).listen(3000,function(){
    console.log("Nodejs sample application listening on port 3000 ");
});
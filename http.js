const http = require('http');

const server = http.createServer(function(req,res){
    // res.writeHead(200,{"content-type":"text/html"})
    // res.write("<h1>hello world</h1>")
    // res.end();
    if(req.url=="/about"){
        res.end("<h1>about </h1>")
    }
    else if(req.url=="/contact")
    {
        res.end("<h1> contact </h1>")
    }
    else{
        res.end("<h1> home </h1>")
    }
})


server.listen(5000,function(){
    console.log("Server started ....")
})
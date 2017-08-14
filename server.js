const http = require("http"); 
const fs = require("fs"); 

const server = http.createServer(function(req, res){
    
    // when the request from client hits the server create a readable stream
    const obj = fs.createReadStream(process.argv[3], "utf8"); 
    // obj is readable stream obj(class to be precise)
    // whatever you do with "streams" are event based. 
    
    // event when data is available
    obj.on("data", function(data){
        res.write(data); 
        res.end(); 
    }); 
    obj.on("error", function(){
        console.error; 
    }); 
}); 

server.listen(process.argv[2]); 



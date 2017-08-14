const http = require("http"); 


const server = http.createServer(function(req, res){
    
    req.setEncoding("utf8");
    const arr = []; 
    
    req.on("data", function(data){
        // data.setEncoding("utf8")
        arr.push(data);
    });
    
    req.on("end", function(){
        res.write((arr.join("").toUpperCase())); 
        res.end(); 
    });

}); 

server.listen(process.argv[2]); 
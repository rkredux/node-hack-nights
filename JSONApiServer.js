// Please refactor this man! This function has too much repition boss!

const http = require("http"); 
const url = require("url"); 

function convertToJSONParse(time){
  var date = new Date(time); 
  var hour = date.getHours(); 
  var minute = date.getMinutes(); 
  var second = date.getSeconds(); 
  var obj = {hour, minute, second}; 
  return JSON.stringify(obj); 
}


function convertToUnix(time){
  const date = new Date(time); 
  const output = date.getTime(); 
  return JSON.stringify({unixtime: output});  
}


const server = http.createServer(function(req, res){
  
  const dir = url.parse(req.url); 
  const path = dir.pathname;
  const str = dir.query.split("=")[1]; 
  // console.log(dir, path, str); 
  
  
  if(path === '/api/parsetime'){
    res.write(convertToJSONParse(str)); 
  }else if(path === '/api/unixtime') {
    res.write(convertToUnix(str)); 
  } else{
    console.log("Please send a GET request"); 
  }
  
  res.end(); 
  
}); 

server.listen(process.argv[2]); 
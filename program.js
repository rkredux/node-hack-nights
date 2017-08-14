// Write a TCP time server!  
  // Your server should listen to TCP connections on the port provided by the  
  // first argument to your program. For each connection you must write the  
  // current date & 24 hour time in the format:  
  //   "YYYY-MM-DD hh:mm"  
  // followed by a newline character. Month, day, hour and minute must be  
  // zero-filled to 2 integers. For example:  
  //   "2013-07-06 17:42" 
  // After sending the string, close the connection. 
  
  
   
  const net = require("net"); 
 
  function convert(num){
    return (num < 10 ? "0":"") + num;
  }
  
  function now(){
    var date = new Date(); 
    return `${date.getFullYear()}-${convert(date.getMonth() + 1)}-${convert(date.getDate())} ${convert(date.getHours())}:${convert(date.getMinutes())}\n`; 
  }
  
  const server = net.createServer(function(s){
    s.end(`${now()}`, "utf8", function(){
      return; 
    });
  }); 
  
  
  
  
  server.listen(process.argv[2]); 
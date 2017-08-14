 
//   Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Collect all data from the server (not  
//   just the first "data" event) and then write two lines to the console  
//   (stdout).  
   
//   The first line you write should just be an integer representing the number  
//   of characters received from the server. The second line should contain the  
//   complete String of characters sent by the server.  



const http = require("http"); 

http.get(process.argv[2], function(response){ 
    response.setEncoding("utf8"); //convert response into strings from buffer
    
    var arr = []; //array to collect the strings
    
    //build the array callback is passed
    response.on("data", function(data){
        arr.push(data.trim()); 
    }); 
    
    // after streaming is over callback is called to construct the string
    response.on("end", function(){
        const str = arr.join(" ").concat(" "); 
        console.log(str.length); 
        console.log(str); 
    }); 
    
    response.on("error", console.error); 
    
}).on("error", console.error); 
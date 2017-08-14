//  Write a program that performs an HTTP GET request 
// to a URL provided to you  as the first command-line argument. 
// Write the String contents of each "data" event from the response 
// to a new line on the console



const http = require("http"); 


http.get(process.argv[2], function(response){
    response.setEncoding("utf8"); //call the setEncoding right here
    response.on("data", console.log); //call back when data is emitted
    response.on("error", console.error); 
    // response.on("end", console.log("done"));
}).on("error", console.error); 








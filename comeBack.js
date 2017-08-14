 
//   Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Collect all data from the server (not  
//   just the first "data" event) and then write two lines to the console  
//   (stdout). The first line you write should just be an integer representing the number  
//   of characters received from the server. The second line should contain the  
//   complete String of characters sent by the server.  

//  This problem is the same as the previous problem (HTTP COLLECT) in that  
//   you need to use http.get(). However, this time you will be provided with  
//   three URLs as the first three command-line arguments.  
   
//   You must collect the complete content provided to you by each of the URLs  
//   and print it to the console (stdout). You don't need to print out the  
//   length, just the data as a String; one line per URL. The catch is that you  
//   must print them out in the same order as the URLs are provided to you as  
//   command-line arguments.  


const http = require("http"); 



function fetchData(destination){
    http.get(destination, (response) =>{
        var arr = []; 
        response.setEncoding("utf8"); 
        response.on("data", function(data){
           arr.push(data.trim());  
        }); 
        response.on("end", ()=>{
            return arr.join(" ").concat(" "); 
        }); 
        response.on("error", console.error); 
    }).on("error", console.error);  
}


function* displayResults(address){
   const str = yield fetchData(address); 
}

const resultObject = displayResults();

console.log(resultObject.next(process.argv[2]).value); 
 






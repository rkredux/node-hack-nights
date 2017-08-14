
 
 
const http = require("http"); 


function logOut(a, b, c){
    
    http.get(a, function(response){
        
        response.setEncoding("utf8"); 
        var arrA = [],
            arrB = [], 
            arrC = []; 
        
        response.on("data", function(data){
          arrA.push(data.trim()); 
        }); 

        response.on("end", function(){
            
            http.get(b, function(response){
                response.setEncoding("utf8"); 
                response.on("data", function(data){
                arrB.push(data.trim()); 
                }); 
                response.on("end", function(){
                    
                    http.get(c, function(response){
                        response.setEncoding("utf8"); 
                        response.on("data", function(data){
                            arrC.push(data.trim()); 
                        });
                        response.on("end", function(){
                           console.log(arrA.join(" ").concat(" ")); 
                           console.log(arrB.join(" ").concat(" ")); 
                           console.log(arrC.join(" ").concat(" ")); 
                        }); 
                    });
                    
                    
                }); 
            }); 
        }); 
    }).on("error", console.error); 
    
}


logOut(process.argv[2], process.argv[3], process.argv[4]); 
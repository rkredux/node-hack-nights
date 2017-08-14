// main entry js
const filterFiles = require("./directoryFilter.js"); 


function logOut(err, data){
    if(err){return console.error(`The directory path ${err.path} could not be found`);}
    data.forEach(file => console.log(file)); 
}

// filterFiles(process.argv[2], process.argv[3], logOut); 


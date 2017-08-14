// This module exports a function that filters the files
//in a directory on the basis of their extension format

const fs = require("fs"); 



function filterFiles(dir, ext, callback){
    fs.readdir(dir, (err, data) => {
        if(err){return callback(err);}
        const output = data.filter(dat => dat.split(".")[1] === ext);
        callback(err, output);
    }); 
}


module.exports = filterFiles; 



// filterFiles(process.argv[2], process.argv[3]); 



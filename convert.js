function convert(num){
    return (num < 10 ? "0":"") + num; 
}

console.log(convert(process.argv[2])); 


// module.exports = convert; 
// console.log(convert(process.argv[2])); 


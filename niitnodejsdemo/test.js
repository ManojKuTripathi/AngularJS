var fs = require("fs");


console.log('Start of File Read')
//var content = fs.readFileSync("./files/sample.txt");
//console.log('Contents :' + content)


fs.readFile('./files/sample.txt', function(error, data){
    if(error){
        console.log(error)
    }
    console.log('Contents :' + data)
})

console.log('End of File Read')
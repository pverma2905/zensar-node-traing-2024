
// const fs = require('fs');

// fs.readFile('file1.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log('\t\t Asynchronous Read \n'+data.toString());
// })

// console.log('\nLast Line!\n');

// async await

// require('fs).promises provide promise-based API for file operations. It allows us to use async/await for more
// readable and maintainable asynchronous code.
const fs = require('fs').promises;

async function readMyFile(filePath){
    try{
        const data = await fs.readFile(filePath,'utf-8');
        console.log(data);
    }
    catch(err){
        console.error(`Got an error ${err.message}`);
    }
}

readMyFile('file1.txt');

console.log('\nLast Line!\n');
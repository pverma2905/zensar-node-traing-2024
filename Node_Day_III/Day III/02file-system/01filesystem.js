const fs = require('fs');

//fs.stat('file1.txt',function(err,stats){
// fs.stat('D:\\Trainings\\DAP_MEN_12_Aug_2024\\Day III\\02file-system',function(err,stats){
//     console.log(err);
//     console.log(stats);
//     console.log('is File? '+stats.isFile());
//     console.log('is Directory? '+stats.isDirectory());
// })

// fs.readdir('./',function(err,files){
//     if(err){
//         return console.error(err);
//     }
//     files.forEach(function(file){
//         console.log(file);
//     })
// })

// fs.readFile('file1.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log('\t\t Asynchronous Read \n'+data.toString());
// })

// console.log('\nLast Line!\n');

// Synchronous version of readFile - readFileSync

// let data = fs.readFileSync('file1.txt');
// console.log('\t\t Synchronous Read\n'+data.toString());

// console.log('\nLast Line!\n');

// writeFile - write one nrew file file2.txt will have contens for file1.txt overwrite the content 
// appendFile - append the new content to the older one -file3.txt.

//writeFile

// let message = '\nHello from Node Application!';

// fs.writeFile('./file2.txt',message,'utf-8',(err) =>{
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log('File Write Completed!');
//     }
// })

// console.log('\nLast Line\n');

//appendFile

let message = '\nHello from Node Application!';

fs.appendFile('./file3.txt',message,'utf-8',(err) =>{
    if(err){
        console.error(err);
    }
    else{
        console.log('File Append Completed!');
    }
})

console.log('\nLast Line\n');
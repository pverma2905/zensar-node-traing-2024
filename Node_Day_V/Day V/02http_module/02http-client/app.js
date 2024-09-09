// RESTful Service - https://jsonplaceholder.typicode.com/posts

const https = require('https');
const fs = require('fs');

const url = "https://jsonplaceholder.typicode.com/posts";

const writeStream = fs.createWriteStream('./posts.json');

var options = {
    method:'GET'
}

const handleResponse = (res) => {
    if(res.statusCode !== 200){
        console.log('Request can not be completed!.....');
        res.resume();
        return;
    }
    res.on('data',(chunk) =>{
        console.log('Chunk of Data received!');
        writeStream.write(chunk);
    })
    res.on('close',() =>{
        console.log('All data received!');
        writeStream.close();
    });
}

const handleError = (error) =>{
    console.error('Error: ',error.message);
}

const request = https.request(url,options,handleResponse);
request.on('error',handleError);

request.end();
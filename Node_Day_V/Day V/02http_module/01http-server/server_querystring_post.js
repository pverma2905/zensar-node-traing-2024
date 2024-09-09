

// // Handle Query String parameters
// const http = require('http');
// const url = require('url');

// // Create an HTTP Server
// const server = http.createServer((req,res) =>{

//     const parsedUrl = url.parse(req.url,true);
//     const query = parsedUrl.query;

//     res.statusCode = 200;// Set status code
//     res.setHeader('Content-Type','text/html');// Set response header
//     res.end(`<h1>Welcome ${query.name || "defaultUser"}!</h1>`); // Send response body
// });

// // Start the Server and listen on port 3000
// server.listen(3000,"127.0.0.1",() =>{
//     console.log("Server running at http://127.0.0.1:3000/");
// })


// Make use of certain tools like 
// Postman, or VSCode has extension called as Thunder Client

// Handle Post Request
const http = require('http');

// 405 Method Not Allowed indicates server recognizes the request method, but 
// the target resource doesn't support this method.

// Create an HTTP Server
const server = http.createServer((req,res) =>{
    
    if(req.method === "POST"){
        let body = "";
        // Collect data in chunks
        req.on('data',(chunk) =>{
            body += chunk.toString();
        });

        // When all data is received
        req.on('end',() =>{
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            res.end(`Received data: ${body}`);
        })

    }else{
        res.statusCode = 405;// status code 405 - Method not allowed
        res.end("Only POST requests are allowed!");
    }
});

// Start the Server and listen on port 3000
server.listen(3000,"127.0.0.1",() =>{
    console.log("Server running at http://127.0.0.1:3000/");
})
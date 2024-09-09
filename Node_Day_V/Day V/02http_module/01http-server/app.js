/*
The 'http' module is a core module that allows Node.js to transfer data over the
HTTP. This module can be used to create both HTTP clients and servers.
*/

// Simple Text as a response
// const http = require('http');

// // Create an HTTP Server
// const server = http.createServer((req,res) =>{

//     res.statusCode = 200;// Set status code
//     res.setHeader('Content-Type','text/plain');// Set response header
//     res.end('Hello, World!\n'); // Send response body
// });

// // Start the Server and listen on port 3000
// server.listen(3000,"127.0.0.1",() =>{
//     console.log("Server running at http://127.0.0.1:3000/");
// })

// // HTML as a response
// const http = require('http');

// // Create an HTTP Server
// const server = http.createServer((req,res) =>{

//     res.statusCode = 200;// Set status code
//     res.setHeader('Content-Type','text/html');// Set response header
//     res.end('<h1>Hello, World!</h1>'); // Send response body
// });

// // Start the Server and listen on port 3000
// server.listen(3000,"127.0.0.1",() =>{
//     console.log("Server running at http://127.0.0.1:3000/");
// })

// // HTML as a response
// const http = require('http');

// // Create an HTTP Server
// const server = http.createServer((req,res) =>{

//     res.statusCode = 200;// Set status code
//     res.setHeader('Content-Type','text/plain');// Set response header
//     if(req.url === '/'){
//         res.end('Welcome to the HOME page!');
//     }else if(req.url === '/about'){
//         res.end('Know more ABOUT us!');
//     }else if(req.url === '/contact'){
//         res.end('Feel free to CONTACT us!');
//     }else{
//         res.statusCode = 404;
//         res.end('Page not found!');
//     }
// });

// // Start the Server and listen on port 3000
// server.listen(3000,"127.0.0.1",() =>{
//     console.log("Server running at http://127.0.0.1:3000/");
// })

// HTML as a response
const http = require("http");
const fs = require("fs");

// Create an HTTP Server
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.statusCode = 200; // Set status code
  res.setHeader("Content-Type", "text/plain"); // Set response header
  if (req.url === "/") {
    fs.readFile("./index.html", "utf-8", (err, htmlContent) => {
      if (err) {
        res.setHeader("content-type", "text/plain");
        res.end("Page Not Found!");
      } else {
        res.setHeader("content-type", "text/html");
        res.write(htmlContent);
        res.end();
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("./about.html", "utf-8", (err, htmlContent) => {
        if (err) {
          res.setHeader("content-type", "text/plain");
          res.end("Page Not Found!");
        } else {
          res.setHeader("content-type", "text/html");
          res.write(htmlContent);
          res.end();
        }
      });
  } else if (req.url === "/contact") {
    fs.readFile("./contact.html", "utf-8", (err, htmlContent) => {
        if (err) {
          res.setHeader("content-type", "text/plain");
          res.end("Page Not Found!");
        } else {
          res.setHeader("content-type", "text/html");
          res.write(htmlContent);
          res.end();
        }
      });
  } else {
    fs.readFile("./pagenotfound.html", "utf-8", (err, htmlContent) => {
        if (err) {
          res.setHeader("content-type", "text/plain");
          res.end("Page Not Found!");
        } else {
          res.setHeader("content-type", "text/html");
          res.write(htmlContent);
          res.end();
        }
      });
  }
});

// Start the Server and listen on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

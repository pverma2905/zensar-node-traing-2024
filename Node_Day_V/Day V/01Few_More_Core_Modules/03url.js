// The 'url' module provides utilites for URL resolution and parsing.

const url = require('url');

const myURL = new URL('https://google.co.in/path/name?query=123');

console.log(url.parse('https://google.co.in/path/name?query=123'));

console.log(url.format(myURL));

console.log(url.resolve('https://google.co.in/path/','subpath'));
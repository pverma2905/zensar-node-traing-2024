
const fs = require('fs');
const stream = fs.createWriteStream('02output.txt');

stream.write('Hello Node.js!\n');
stream.write('We are learning writable stream!');
stream.end();

// The 'finish' event is emitterd after the stream.end() method has been called.
// adn all data has been flushed to the underlying system.

// providing event listener for the 'finish' event

stream.on('finish',function(){
    console.log('All writes are completed!');
})
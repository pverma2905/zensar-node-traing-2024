

// Streams in node.js are a powerful way to handle data efficiently, especially when dealing with large amounts of
// data or data that is received in chunks. Streams able to emit their own events.

/*
Types of Streams

Readable Stream - Used for reading data.
Writable Stream - Used for writing data.
Duplex Stream - Use of both reading and writing.
Transform Stream - A type of duplex stream where the oput is computed based on the input. e.g. include zlib streams for compression.

Benefits of Streams
Memory Efficiency - loads in terms of chunks
Time Efficiency - start processing data as soon as it is available, rather than waiting for the entire data to be loaded.

Use Cases
File Operations
Network Communications
Data Transformations
*/

const fs = require('fs');
let stream = fs.createReadStream('01raw.json');

// providing event listener for 'data' event
stream.on('data',function(dataChunk){
    console.log('Chunk starts.....');
    console.log(dataChunk);
    console.log(dataChunk.toString());
    console.log('Chunk ends.....');
    stream.pause();
    console.log('Stream paused!');
    setTimeout(function(){
        stream.resume();
        console.log('Stream resumed!');
    },1500);
});

// providing event listener for 'end' event
stream.on('end',function(){
    console.log('Reached EOF, no more data available!');
});
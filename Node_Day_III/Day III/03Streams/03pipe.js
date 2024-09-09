
// const fs = require('fs');

// let readableStream = fs.createReadStream('03cricketers.json');
// let writableStream = fs.createWriteStream('03cricketersI.json');

// // Duplex Stream
// // providing event listener for the 'finish' event of a writable stream.
// writableStream.on('finish',function(){
//     console.log('All writes are completed!');
// });

// readableStream.pipe(writableStream);



const fs = require('fs');
const zlib = require('zlib');

// Transform Stream
let readableStream = fs.createReadStream('03cricketers.json');
let writableStream = fs.createWriteStream('03cricketersNew.json.gz');

// providing event listener for the 'finish' event of a writable stream.
writableStream.on('finish',function(){
    console.log('All writes are completed!');
});

readableStream.pipe(zlib.createGzip()).pipe(writableStream);

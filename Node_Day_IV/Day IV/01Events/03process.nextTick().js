function foo(){
    console.log('foo!');
}

function bar(){
    console.log('bar!');
}

// foo();
// bar();

// process.nextTick(foo); // deffered execution
// bar();

// Use process.nextTick when you want to make sure that in the next event loop iteration
// that code is already executed.
// When we pass a function to process.nextTick() we instruct the engine to
// invoke this function at the end of the current operation, before the next event loop tick starts.



console.log('Hello => number 1!');

setImmediate(() =>{
    console.log('Running before the timeout => number 3!');
})

setTimeout(() =>{
    console.log('The timeout running last => number 4!');
},10)


process.nextTick(() =>{
    console.log('Running at next tick => number 2!');
})
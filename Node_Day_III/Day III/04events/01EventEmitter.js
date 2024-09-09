// events

const events = require('events');
let EventEmitter = events.EventEmitter;
let ee = new EventEmitter();


// publisher-subscriber pattern / observer pattern

//1

// creating a custom event 'some-event'
// provide event listener for the 'someEvent
// publish/ raise /emit the 'some-event'


// // Providing event listener for the 'someEvent' event
// ee.on('some-event',function(){
//     console.log('Event has occured and handled too!');
// })

// // raise / emit the event
// ee.emit('some-event'); // raise it


// 2 event data

let userData = new Object();
userData.id = 100;
userData.name = 'Sachin';


ee.on('new-user',function(evt){
    console.log('\nData along with Event is Id:- '+evt.id+' Name:- '+evt.name);
})


//ee.emit('new-user',userData); // while raising an event also passing data to with it


// 3 multiple event listeners
ee.setMaxListeners(20);

ee.on('some-event',function(){console.log('Event Listener 1!')});
ee.on('some-event',function(){console.log('Event Listener 2!')});
ee.on('some-event',function(){console.log('Event Listener 3!')});
ee.on('some-event',function(){console.log('Event Listener 4!')});
ee.on('some-event',function(){console.log('Event Listener 5!')});
ee.on('some-event',function(){console.log('Event Listener 6!')});
ee.on('some-event',function(){console.log('Event Listener 7!')});
ee.on('some-event',function(){console.log('Event Listener 8!')});
ee.on('some-event',function(){console.log('Event Listener 9!')});
ee.on('some-event',function(){console.log('Event Listener 10!')});
ee.on('some-event',function(){console.log('Event Listener 11!')});
ee.on('some-event',function(){console.log('Event Listener 12!')});

// // raise the event
// ee.emit('some-event');

// 4 only once

// ee.on('first-connection',function(){
// Event Listener gets executed only once irrespective of whatever no of times you raise that event
ee.once('first-connection',function(){
    console.log("You'll never see this again!");
})

// raising the event twice or more 

ee.emit('first-connection');
ee.emit('first-connection');
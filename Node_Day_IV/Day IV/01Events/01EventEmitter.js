// events

// const events = require('events');
// let EventEmitter = events.EventEmitter;
// let ee = new EventEmitter();

const EventEmitter = require('events').EventEmitter;
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


// 3 multiple event listeners - by default no of event listeners you can have are 10

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

// // raise the event
// ee.emit('some-event');

// // 4 only once

// // ee.on('first-connection',function(){
// // Event Listener gets executed only once irrespective of whatever no of times you raise that event
// ee.once('first-connection',function(){
//     console.log("You'll never see this again!");
// })

// // raising the event twice or more 

// ee.emit('first-connection');// whichever event listener you have provided that would get handled
// ee.emit('first-connection');// event is raised and it is being handled by default event listener
// ee.emit('first-connection');

//ee.emit('just-one');// is this event raised or no?Yes that is what emit function does
                    // is this event handled or no?Yes by using default event listener

// //5 removeListener
// function onlyOnce(){
//     console.log("You'll never see this again!");
//     // listener 'onlyOnce' is being removed from event 'first-connection'
//     ee.removeListener('first-connection',onlyOnce);
// }

// ee.on('first-connection',onlyOnce);

// ee.emit('first-connection');
// ee.emit('first-connection');


// //6 removeAllListeners
// ee.on('first-connection',function(){
//     console.log("You'll never see this again!");
// })


// ee.emit('first-connection');
// ee.emit('some-event');

// console.log('\n\n');
// // ee.removeAllListeners();
// ee.removeAllListeners('some-event');

// ee.emit('first-connection');
// ee.emit('some-event');


// //7 listeners
// function onlyOnce(){
//     console.log(ee.listeners('first-connection'));
//     console.log("You'll never see this again!");
//     // listener 'onlyOnce' is being removed from event 'first-connection'
//     ee.removeListener('first-connection',onlyOnce);
//     console.log(ee.listeners('first-connection'));
// }

// ee.on('first-connection',onlyOnce);

// ee.emit('first-connection');
// ee.emit('first-connection');

// //console.log(ee.listeners('some-event'));

// //8 'events' module has some built-in events
// // like

// // newListener - event raised when you register the event listener to the
// // event using on, once methods.

// // removeListener - event raised when you remove the event listener of the 
// // event using removeListener or off or removeAllListeners methods.


// function abc(){console.log('abc event listener!')}
// function xyz(){console.log('xyz event listener!')}
// function pqr(){console.log('pqr event listener!')}

// ee.on('newListener',function(eventName,fn){
//     console.log('newListener Event Listener!');
//     console.log('New Event '+eventName);
//     console.log('New Listener '+fn+'\n');
// })

// ee.on('removeListener',function(eventName,fn){
//     console.log('removeListener Event Listener!');
//     console.log('Remove Event '+eventName);
//     console.log('Remove Listener '+fn+'\n');
// })

// ee.on('abc-user',abc);
// // ee.on('xyz-user',xyz);
// // ee.on('pqr-user',pqr);
// //ee.removeListener('abc-user',abc);
// ee.off('abc-user',abc);
// //ee.removeAllListeners('some-event');


// 9 
let radium = new EventEmitter();

radium.on('radiation',function(ray){
    console.log(ray);
});


setInterval(function(){
    radium.emit('radiation','GAMMA');
},1000);
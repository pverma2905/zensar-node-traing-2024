
let Radio = require('./02.1radio_emitter');

let station = {
    freq:'93.5',
    name:'Radio Mirachi'
}

let radio = new Radio(station);

// event listener for the play event of a radio
radio.on('play',function(station){
    console.log("' %s ' %s FM started",station.name, station.freq);
    let cnt = 0;
    let interval = setInterval(function(){
        console.log('\n♫♫♫');
        if(++cnt === 5){
            clearInterval(interval);
            console.log('\nSong Ends! \n');
            radio.stop();
        }
    },1000);
})


// event listener for the end event of a radio
radio.on('end',function(station){
    console.log("' %s ' %s FM stopped\n",station.name, station.freq);
    
})
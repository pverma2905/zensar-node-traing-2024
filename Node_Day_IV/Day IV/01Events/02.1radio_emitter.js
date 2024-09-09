
const EventEmitter = require('events').EventEmitter;


class Radio extends EventEmitter{
    station;
    constructor(station){
        super();
        this.station = station;
        this.start();
    }

    start(){
        setTimeout(() =>{
            this.emit('play',this.station);
        },0);
    }

    stop(){
        setTimeout(() =>{
            this.emit('end',this.station);
        },1000);
    }
}

module.exports = Radio;
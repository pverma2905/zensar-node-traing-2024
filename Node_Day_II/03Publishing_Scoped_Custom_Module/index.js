// ES5 class Calculator
module.exports.Calculator = function(){
    this.square = function(no){
        return no*no;
    },
    this.cube = function(no){
        return no*no*no;
    }
}

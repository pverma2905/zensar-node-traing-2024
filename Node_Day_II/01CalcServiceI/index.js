
//ES5 exporting a function add
module.exports.add = function(x,y){
    var calcModule = require('./calculator');
    var calc = new calcModule.Calculator();
    return calc.addition(x,y);
}
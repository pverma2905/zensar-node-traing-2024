

var calcModule = require('zen_aug_calc_add_mult');
var calc = new calcModule.Calculator();
console.log('Addition is '+calc.addition(4,5));
console.log('Multiplication is '+calc.multiplication(4,5));


console.log('\n');


var calcNewModule = require('@zenaug24/zen_aug_calc_square_cube');
var calcNew = new calcNewModule.Calculator();
console.log('Square is '+calcNew.square(5));
console.log('Cube is '+calcNew.cube(5));

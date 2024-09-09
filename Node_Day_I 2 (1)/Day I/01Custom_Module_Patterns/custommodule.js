
// // simple module
// console.log('Hello World from the Custom Module!');


// // Pattern 1 - define a global
// foo = function(){
//     console.log('Inside foo!');
// }

// // Pattern 2 - exporting an anoymous function
// module.exports = function(){
//     console.log('Anonymous Function!');
// }

// // Pattern 3 - exporting a named function
// module.exports.funName = function(){
//     console.log('Named Function!');
// }

// // Pattern 4 - exporting an anonymous object
// var Buz = function(){};
// Buz.prototype.log = function(){
//     console.log('Buz!');
// }

// module.exports = new Buz();


// // Pattern 5 - exporting a named object
// var Baz = function(){};
// Baz.prototype.log = function(){
//     console.log('Baz!');
// }

// module.exports.baz = new Baz();

// // Pattern 6 - exporting an anonymous class
// module.exports = function(){
//     this.Id = 100;
//     this.Name='Rahul';
//     this.City = 'Bengaluru'
// }

// // Pattern 7 - exporting a named class
// module.exports.Employee = function(){
//     this.Id = 200;
//     this.Name='Anil';
//     this.City = 'Hyderabad'
// }

// module.exports.Person = function(){
//     this.Name='Raj';
//     this.State = 'MH'
// }

// exports.sayHello = () =>{
//     console.log('Hello!');
// }
// exports.sayBye = () =>{
//     console.log('Bye!');
// }


// Combining named and anonymous

// exporting anonymous - subtract
module.exports = function(a,b){
    return a-b;
}

//exporting anonymous - mult
module.exports = function(a,b){
    return a*b;
}

// function add(a,b){
//     return a+b;
// }
// // exporting named fun
// module.exports.add = add;
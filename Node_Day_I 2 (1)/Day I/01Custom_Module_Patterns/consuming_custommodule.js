
// // consuming the modules
// require('./custommodule');

// // Pattern 1
// require('./custommodule');
// foo();


// // Pattern 2
// var funName = require('./custommodule');
// funName();


// // Pattern 3
// var moduleName = require('./custommodule');
// moduleName.funName();

// // Pattern 4
// var buz = require('./custommodule');
// buz.log();


// // Pattern 5
// var bazModule = require('./custommodule');
// bazModule.baz.log();

// // Pattern 6
// var Employee = require('./custommodule');
// var emp = new Employee();
// console.log(emp.Id+' '+emp.Name+' '+emp.City);

// // Pattern 7
// var empModule = require('./custommodule');
// var emp = new empModule.Employee();
// console.log(emp.Id+' '+emp.Name+' '+emp.City);


// var oneModule = require('./custommodule');

// var emp = new oneModule.Employee();
// console.log(emp.Id+' '+emp.Name+' '+emp.City);

// var per = new oneModule.Person();
// console.log(per.Name+' '+per.State);


// oneModule.sayHello();
// oneModule.sayBye();

var fun = require('./custommodule');

console.log(fun(4,5));


// Anonymous exports - single client interface. - only one, the last one would get executed
// Named exports - one Module, many exported things
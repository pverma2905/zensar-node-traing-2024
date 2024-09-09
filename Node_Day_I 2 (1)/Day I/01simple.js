//console.log('Hello World!');

// // ES5 Class
// function Employee(){
//     this.Id = 1;
//     this.Name = 'Abhijeet';
//     this.City = 'Pune';
// }

// var emp = new Employee();
// console.log(emp.Id+' '+emp.Name+' '+emp.City);

// way to import is using COMMONJS's require() function

var EmpModule = require('./01employee');
var emp = new EmpModule.Employee();
console.log(emp.Id+' '+emp.Name+' '+emp.City);
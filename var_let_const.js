var message = "Hello";
var message = "hii";
var message = "byee";
console.log(message); 

// var is function scoped, let is block scoped, and const is block scoped and cannot be reassigned
let message="hello";
let message="hii";
console.log(message); 
// This will throw an error because let cannot be redeclared in the same scope

const message = "Hello";
console.log(message);
// This will throw an error because const cannot be reassigned
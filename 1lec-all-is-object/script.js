/*
  All elements in javascript are objects.
*/

console.log(typeof 'hola mundo'); // primiteve - string
console.log(typeof 100); // primitive - number
console.log(typeof false); // primitive - boolean

console.log(typeof {}); // object
console.log(typeof []); // object

console.log(typeof new Date()); // object
console.log(typeof new RegExp()); // object

console.log(typeof new Number(100)); // object
console.log(typeof new String('Hello world')); // object
console.log(typeof new Boolean(true)); // object

console.log(100); // 100
console.log(new Number(100)); // Number { 100 }
console.log('Hello world'); // Hello world
console.log(new String('Hello world')); // String { 'Hello world' }
console.log(true); // true
console.log(new Boolean(true)); // Boolean { true }

/* 
  methods -> The object has methods. And also, It can use methods from a private 
  value, because JavaScript temporarily converts primitive types like strings into
  objects when you call methods on them.
*/
console.log(typeof 'Hello world'.toUpperCase()); // string

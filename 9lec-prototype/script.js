function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.displayName = function()  {
    return `${this.name} ${this.lastname}`
  }
}

const person1 = new Person('box', 'bonny');
const person2 = new Person('pato', 'lucas');
const person3 = new Person('Maria', 'Perez');
const person4 = new Person('Jose', 'Perez');

/*
 prototype -> In Javascript every object has a property called 'prototype'.
 This property is in fact an object who is used primarily for inheritance and 
 to provide shared properties and functions to other objects.
*/

/*
 adding a function and a property to Person's prototype in order 
 to all Person's instances inherit this and can use it then.
*/
Person.prototype.greet = function() {
  return `Hello, I am ${this.name}`
}

Person.prototype.age = 100;

console.log(person1.age);
console.log(person1.greet());
console.log(person2.greet());
console.log(person4.greet());
console.log(person3.greet());

console.log(person1.age);
console.log(person2.age);
console.log(person3.age);
console.log(person4.age);

const s = new String('Hello world');
const s2 = new String('Hola mundo');

String.prototype.concatTest = function() {
  return this + 'Test';
}

console.log(s.concatTest());
console.log(s.concatTest());
console.log('greeting'.concatTest());
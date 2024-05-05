/*
  new -> it allow you to create a new object instance. 
*/

/*
  new Object() -> It is the same that declare {} 
*/
const person = new Object();
const person2 = {};

console.log(person); // {}
console.log(person.constructor === Object); // true
console.log(person2.constructor === Object); // true

/* 
  Creating a new Number instance.
*/
const number = new Object(2);
const number2 = new Number(2);
console.log(number); // Number {2}
console.log(number2); // Number {2}

/*
  Creating a new String instance.
*/

const string = new Object('Hello World');
const string2 = new String('Hello World');
console.log(string); // String {'Hello World'}
console.log(string2); // String {'Hello World'}

/*
  I can add some methods or attributes to the instances dinamically.
*/
number.add = function(val) {
  return this + Number.parseInt(val);
}
number.id = 1;
number2.subs = function(val) {
  return this - Number.parseInt(val);
}
number2.id = 1;
console.log(number.add(1)); // 3
console.log(number.id); // 1
console.log(number2.subs(1)); // 1
console.log(number2.id); // 1

string.upper = function() {
  return this.toUpperCase();
}
string2.lower = function() {
  return this.toLowerCase();
}
console.log(string.upper()); // HELLO WORLD
console.log(string2.lower()); // hello world

const user = {
  name: '',
  lastname: '',
  age: 30,
  showName() {
    return this.name;
  }
}
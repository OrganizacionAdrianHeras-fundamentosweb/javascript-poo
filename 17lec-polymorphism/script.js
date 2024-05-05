/*
  Polymorphism principle: handle multiple data types uniformly
    - reduces coupling in our application.
    - sometimes allow to create more compact code.
    - dependes if it's supported for programming language:
      - overloading: methods can take parameters with different data types
      - parametic polymorphism: manage generic types
      - subtype Polymorphism or inclusion Polymorphism: type can be
        represented by a class and derived from it.
*/

// overloading example

function countItems(x) {
  // asking if the value's type is number
  if(typeof x === 'number') {
    return x.toString().length;
  }
  return x.length;
}

console.log(countItems('hola mundo')); // 10
console.log(countItems(1000)); // 4

/*
  You can assign default values to parameters in javascript
*/
function sum(x = 0, y = 0, z = 0) {
  if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
    throw new TypeError('You must send a number as parameter');
  }
  return x + y + z;
}

console.log(sum(10, 20)); // 30
console.log(sum(10, 20, 30)); // 60

/*
  parametic polymorphism -> method that works with parameters of any type, also
  called generics.
*/

function Stack() {
  const items = [];
  this.push = function(item) {
    items.push(item);
  }
  this.getItems = function() {
    return items;
  }
}

const stack = new Stack();
stack.push('item1');

const stack2 = new Stack();
stack2.push(123);

console.log(stack.getItems()); // ['item1']
console.log(stack2.getItems()); // [123]

/*
  subtype polymorphism: allos object with different types but with an
  inheritance relationship
*/

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class Programmer extends Person {
  constructor(language, name, lastname) {
    super(name, lastname);
    this.language = language;
  }
}

class Student {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const person = new Person('john', 'ray');
const programmer = new Programmer('html', 'ryan', 'ray');
const student = new Student('joe', 'doe');

function writeFullname(obj) {
  /*
    instanceof -> operator in Javascript which check whether an object belongs
    to a particular class or constructor function. It returns 'true' if the
    object is an instane of the specified class or one of its subclasses, and
    'false' otherwise.
  */
  if(!(obj instanceof Person)) {
    throw new TypeError('obj must be instance of Person');
  }

  console.log(`${obj.name} ${obj.lastname}`);
}

writeFullname(person); // john ray
writeFullname(programmer); // ryan ray
writeFullname(student); // throw TypeError





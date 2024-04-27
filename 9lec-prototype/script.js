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
 prototype -> it allow you to alter the constructor template and you can add
 another method or property. Therefore, all instances are able to use this new
 method / property.
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
/*
  Association principle: when two objects have a relationship.
*/

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const person1 = new Person('john','ray');
const person2 = new Person('maria','perez');

// relation
person2.parent = person1;

console.log(person1);
console.log(person2);
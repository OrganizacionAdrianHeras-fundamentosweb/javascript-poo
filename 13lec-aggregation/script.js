/*
  Aggregarion principle: when an object has another objects within itself 
  and these have independent life.
*/

const company = {
  name: 'fast tech',
  employees: []
}

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const person1 = new Person('john', 'ray');
const person2 = new Person('maria', 'perez');

// objects which independent life are being stored within company object
company.employees.push(person1, person2);

console.log(person1);
console.log(person2);
console.log(company);



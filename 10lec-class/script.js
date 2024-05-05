/*
  class -> the classes is a best way to create custom objects than functions.
  Also, It allow you to declare propertyes and functions easier.
  Moreover, It contains 'use strict' behind scenes.
  Liwise, a class is actually a function.
*/

class Person {
  /*
    The constructor is who manage the properties and methods which are going
    to be returned by it.
  */
  constructor(name, lastname) {
    /*
      These properties and functions are instance members which will
      be accesed by all Person instances.
    */
    this.name = name;
    this.lastname = lastname;

    /*
      When you define a method within the constructor like this, a new function
      object is created for each instance of the class. This means that every
      time you create a new instance of 'Person', it gets its own copy of the
      method 'printFullname()'. This approach is useful when you neeed to create
      instance-specific methods or if the method relies on values that are
      passed to the constructor.
    */
    this.printFullname = function() {
      return `${name} ${lastname}`
    }
    /*
      If I did it, the constructor wouldn't return the properties name, lastname
      and the greet method, since as I mentioned before, a 'return' statement is
      execute behin escenes in order to return all properties and manages which
      has been declared on this class.
      return {
        x: 'something',
      }
    */
  }

  /*
    When you define methods outside the constructor as part of the class
    definition, they are shared among all instances of the class, since they
    are stored on the prototype object.
    Only one copy of the method exists in memory, and all instances reference
    that same method. This approach is more memory-efficient.
  */
  greet() {
    return `Hello, I am ${this.name} ${this.lastname}`;
  }
}

const person1 = new Person('joe','ray');
const person2 = new Person('ryan', 'ray');
console.log(person1);
console.log(person1.printFullname());
console.log(person1.greet());
console.log(person2.printFullname());
console.log(person2.greet());

console.log(typeof Person); // function
console.log(typeof person1); // objecs.

/*
  Remember that a class is actually a function, So you can use it like an
  anonymous function, since you can store the class declaration
  in a variable.
*/
const Student = class {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}
const student1 = new Student('mateo', 'mendez');
console.log(student1);
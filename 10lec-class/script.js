/*
  class -> the classes is a best way to create custom objects than functions,
  since It allow you to use prototype to extend more properties or function,
  furthermore, implement 'use strict'. Besides that, It has a constructor when
  you can define your properties and also you can define methods outside the
  constructor.

  Moreover, a class is actually a function, since If you use typeof to know the class type in javascript. It will show that it's a function.
*/

class Person {
  /*
    The constructor is who manage the properties and methods which are going
    to be returned by it.
  */
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
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

  greet() {
    return `Hello, I am ${this.name} ${this.lastname}`;
  }
}

const person1 = new Person('joe','ray');
const person2 = new Person('ryan', 'ray');
console.log(person1);
console.log(person1.greet());
console.log(person2.greet());

console.log(typeof Person); // function
console.log(typeof person1); // object

/*
  Remember that I said you that a class is in fact a function. So, you can
  use it like a anonymous function, since you can store the class declaration
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
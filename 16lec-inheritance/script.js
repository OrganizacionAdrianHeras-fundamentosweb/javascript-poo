/*
  inheritance principle: create a specialized object starting 
  from a general one.
  In that way, you can inherit properties and functions from a 
  parent entity.
*/

// First example using a function constructor
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  /*this.greet = function() {
    console.log(`Hello, ${this.name} ${this.lastname}`);
  }*/
}
/*
  adding a function in Person prototype for being inherited 
*/
Person.prototype.greet = function() {
    console.log(`Hello, ${this.name} ${this.lastname}`);
}

function Programmer(language,name,lastname) {
  /*
    Invoke the constructor of Person in order to execute
    the its logic and assign the name and lastname value
    in Programmer object instance.
  */
  Person.call(this, name, lastname);

  this.language = language;
}

/*
 inheriting the functions from Person prototype into Programmer object
*/
Programmer.prototype = Object.create(Person.prototype);
/*
  retrieving the constructor value which was removed during the inheritance.
*/
Programmer.prototype.constructor = Programmer;

/*
  adding a function in Programmer prototype for being inherited 
*/
Programmer.prototype.printLanguage = function() {
  console.log(`Hi, I'm able to write ${this.language} code`);
}



const programmer = new Programmer('javascript','ryan','ray');

console.log(programmer);
programmer.greet();
programmer.printLanguage();

// Second example using a class
class Student {

  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  /*
    declaring functions outside the constructor which are stored in
    Student prototype property to be inherited.
  */
  greet() {
    console.log(`Hello, ${this.name} ${this.lastname}`);
  }

}

/*¨
  extends from the parent class in order to inherit the prototype's
  function from the Student class.
*/
class Technician extends Student {

  constructor(language, name, lastname) {
    /*
      Invoke the constructor of Student in order to execute
      the its logic and assign the name and lastname value
      in Technician object instance
    */
    // calling to parent constructor
    super(name, lastname);
    this.language = language;
  }

  /*
    declaring functions outside the constructor which are stored in
    Technician prototype property to be inherited.
  */
  printLanguage() {
    console.log(`Hi, I'm able to write ${this.language} code`);
  }

}

const technician = new Technician('html','joe','doe');
console.log(technician);
technician.greet();
technician.printLanguage();

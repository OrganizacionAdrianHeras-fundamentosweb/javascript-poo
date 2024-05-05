/*
  Static members are stored on the constructor function itself, 
  this means that static members are associated with the constructor and 
  can be accessed directly from the constructor function than from
  instances of the object.

  So, you can access to a static property or static function by the name 
  of the function constructor or class. For example:
    Person.age;
  Since, It calls the constructor behind scenes.
*/


// First example using a function constructor
function Person(firstname,lastname,iqLevel) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.iqLevel = 13;
  this.printFullname = function() {
    console.log(`My fullname is ${this.firstname} ${this.lastname}`);
  }
  this.printIQLevel = function() {
    console.log(`My ${Person.brain} level is ${iqLevel}`);
  }
}

/*
  This way, we are adding static members like functions and properties to
  the function constructor.
*/
Person.brain = 'IQ';
Person.printHumanPart = function() {
  // calling static property from function consturctor name (Person)
  console.log(`All humans have a ${Person.brain} intelligence`);
}

const person1 = new Person('sue','mendez', 13);

// calling the static function from function constructor name (Person)
Person.printHumanPart();
person1.printFullname();
person1.printIQLevel();

// Second example using a class
class Student {

  // declaring a public static property
  static tool = 'pencil';

  constructor(firstname, lastname, mark) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.mark = mark;
  }

  printFullname() {
    console.log(`My fullname is ${this.firstname} ${this.lastname}`);
  }

  printMark() {
    /*
      This function is a public instance member. So, to call a 
      public static property you can use the class name (Student) 
      or constructor property.
    */
    console.log(`I got a mark of ${this.mark}, 
    thanks to my ${this.constructor.tool}`);
  }

  // declaring a public static function
  /*
    Unlike public instance functions, public static function are not accesible
    from the prototype property of their class
  */
  static printTool() {
    /*
      You can use 'this' to call a public static property within a
      public static function.
    */
    console.log(`All students have a ${this.tool}`);
  }
}

const student1 = new Student('joe','boy',18.5);

// calling the static function from class name (Student)
Student.printTool();
student1.printFullname();
student1.printMark();


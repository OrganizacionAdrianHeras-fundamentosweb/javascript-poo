/*
  encapsulation principle: concentrate data and functions hiding 
  internal details

  private members: They are only accessible from inside of function constructor
  or class declaration
*/

// First example using a function constructor
function Company(name) {
  // declaring a private instance property
  const employees = [];
  // declaring a private instance function
  function privateMethod() {
    console.log('I am a private instance function');
  }
  this.name = name;
  this.getEmployees = function() {
    // calling private instance function
    privateMethod();
    // returning private instance property
    return employees;
  }
  this.addEmployee = function(employee) {
    employees.push(employee);
  }
}

const company1 = new Company('coca cola');
const company2 = new Company('pepsi cola');

console.log(company1);
console.log(company2);

company1.addEmployee({name: 'ryan'});
company1.addEmployee({name: 'joe'});

console.log(company1.getEmployees());
console.log(company2.getEmployees());

// Second example using a class
class Restaurant {
  // declaring a private instance property
  #employees;
  // declaring a private static property
  static #brand = 'KFK';

  constructor(name) {
    // Initializing private instance property
    this.#employees = [];

    this.name = name;
  }

  // declaring a private instance function
  /*
   private instance functions are not accesible from the prototype
   property of their class.
  */
  #privateMethod() {
    console.log('I am a private instance function');
  }

  // declaring a private static function
  static #privateStaticMethod() {
    console.log('I am a private static function');
  }

  getEmployees() {
    // calling private instance function
    this.#privateMethod();
    // returning private instance property
    return this.#employees;
  }

  addEmployee(employee) {
    this.#employees.push(employee);
  }

  static getBrand() {
    // calling private static function
    this.#privateStaticMethod();
    // returning a private static property
    /*
      You can use 'this' to call a private static property within a
      public static function.
      Remember, that if you extends of this class and the child class try
      to call getBrand function. It will throw an error, since only the class
      restaurant are able to call #brand property from 'this'. However, It won't
      throw an error if you return the value from the class name, like
      return Restaurant.#brand;
    */
    return this.#brand;
  }

}

const restaurant1 = new Restaurant('pollos hermanos');
const restaurant2 = new Restaurant('el asado');

console.log(restaurant1);
console.log(restaurant2);

restaurant1.addEmployee({name: 'ryan'});
restaurant2.addEmployee({name: 'joe'});

console.log(Restaurant.getBrand()); // KFK
console.log(restaurant1.getEmployees());
console.log(restaurant2.getEmployees());


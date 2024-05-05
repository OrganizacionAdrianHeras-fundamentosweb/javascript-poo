const user = {
  name: 'Ryan',
  lastname: 'Perez',
  age: 30,
  showFullName() {
    return `${this.name} ${this.lastname}`;
  },
}

/*
  This is how you declare and function constructor in Javascript.
*/
function Person() {
  /*
    instance members of the constructor
  */
  this.name = '';
  this.lastname = '';
  this.age = 0;
  this.showFullName = function () {
    return `${this.name} ${this.lastname}`;
  }
}

// The function constructor is a function type obiously.
console.log(typeof Person); // function

const user2 = new Person();
user2.name = 'Joe';
user2.lastname = 'McMillan';
user2.age = 30;
console.log(user2.showFullName());

const user3 = new Person();
user3.name = 'Cameron';
user3.lastname = 'Howe';
console.log(user3.showFullName());

const user4 = new Person();
console.log(user3);
console.log(user4);

/*
  new -> It allow you to create a new object instance. Thanks to that, the object properties with 'this' will be assign to the object.
  However, what happend if you don't use 'new', It's likely that properties
  beign assign to the parent object. In this case It's 'window'.
*/

function Person() {
  this.name = 'joel';
  this.lastname = 'vermez';
}

const person = Person();
console.log(person);

console.log(window.name); // joel
console.log(window.lastname); // wermez

/*
 'use strict' -> This keyword is able to avoid properties with 'this' being
  assign to parent object as 'window'. So If you don't use 'new', this will take 'undefined' as a value, therefore It will give you an error unless you
  use'new'.
  However, it won't give you an error if exist a parent object that is
  diferent from window.
*/
function Student() {
  'use strict';
  this.name = 'peter';
  this.lastname = 'fajard';
}

const student = new Student();
console.log(student);

const mankind = {
  Human: function() {
    'use strict'
    this.manname = 'nicole';
    this.manlastname = 'percel';
  }
}

const human = mankind.Human();
console.log(mankind.manname); // nicole
console.log(mankind.manlastname); // percel

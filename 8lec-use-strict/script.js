/*
  new -> it allow you to create a new object instance, but what happend 
  if you don't use 'new', It's likely that properties
  beign assign to the parent object that in this case is 'window'.
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
  assign to parent object as 'window'. So If you don't use 'new', 'this' will take 'undefined' as a value, therefore It will give you an error unless you
  use'new'. However, It won't give you an error if exist a parent object that's
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

/*
 Althoug I have declared 'use strict'. It didn't return
 an error, since exist a parent object (mankind) which is 
 different form object 'window'
*/
mankind.Human();
console.log(mankind.manname); // nicole
console.log(mankind.manlastname); // percel

/*
 This part of code return an error, since 'this' took
 undefined as a value, because his object parent was 'window'.
*/
Student();
// console.log(window.name);

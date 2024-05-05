/*
  Composition principle: too much objects can belong to another object with a greater role, but
  any of them is going to have a independent life.
*/

const person = {
  name: 'ryan',
  lastname: 'ray',
  address: {
    street: '123 baker street',
    city: 'london',
    country: 'united kingdom',
  }
}


/*
  if I uncoupled the object address It wouldn't have a purpose or independent life
  for its own, because It has a strong relationship with the object which contain it.
    address: {
      street: '123 baker street',
      city: 'london',
      country: 'united kingdom',
    }
*/


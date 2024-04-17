function showFirstName() {
  return 'Ryan';
}

const user = {
  name: 'ryan',
  lastname: 'ray',
  age: 30,
  showFirstName, // function as property's value
  showLastName: function() { // function as property's value
    return 'Ray';
  },
  showFullName: () => {
    return 'Ryan Ray';
  },
  showHobby() {
    return 'sing';
  },
}

console.log(user.showFirstName());
console.log(user.showLastName());
console.log(user.showFullName());
console.log(user.showHobby());

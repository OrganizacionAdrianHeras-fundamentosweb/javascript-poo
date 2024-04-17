/*
  this -> It reference to object instance
*/
const user = {
  name: 'Ryan',
  lastname: 'Perez',
  age: 30,
  showFullName() {
    return this.name + ' ' + this.lastname;
  },
}

console.log(user);
console.log(user.showFullName());

const account = {
  number: "1234562334",
  amount: 100,
  deposit(quantity) {
    this.amount = this.amount + quantity;
  },
  withdraw(quantity) {
    this.amount = this.amount - quantity;
  }
}
console.log(account.amount);
account.deposit(100);
account.deposit(50);
account.deposit(10);
console.log(account.amount);
account.withdraw(10);
account.withdraw(200);
console.log(account.amount);

console.log('hello world'.toUpperCase());
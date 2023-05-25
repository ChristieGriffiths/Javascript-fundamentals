class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getIntroduction() {
    return `Hey! My name is ${this.name}`
  }
}
const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];
class UserBase {  
  
  constructor(users) {
  this.users = users;
  }
  count() {
    return this.users.length;
  }
  getNames() {
    this.users.forEach(user => {
      console.log(user.getName());
  });
}
  getIntroduction() {
    this.users.forEach(user => {
      'Hey my name is ' + user.getName();
  });
  }
}
let base = new UserBase(users);
console.log(base.count())
console.log(base.getNames())
console.log(base.getIntroduction())
module.exports = User;
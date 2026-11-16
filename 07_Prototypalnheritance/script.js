console.log(`Namaste Javascript`);

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //?Getters In JS.
  get fullName() {
    console.log(`getters In JS`);
    return `${this.firstName} ${this.lastName}`;
  }

  //!SETTERS IN JS.
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getBirthYear() {
    return new Date.getFullYear() - this.age;
  }
}

const user1 = new User("Harry", "Potter", 20);
console.log(user1);
console.log(User.prototype);
console.log(user1.__proto__);
console.log(User.prototype === user1.__proto__);
console.log(user1.fullName);
user1.fullName = "Ronald Weasely";
console.log(user1);
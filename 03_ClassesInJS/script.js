console.log("Namaste Javascript");

//?Behind the scenes, this CreateUser class is a constructorfunction only.

class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  //?This getBirthYear will go inside the prototype property of createUser constructor function.
  //?When we will call this CreateUser constructor function,these below functions will not get called.
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  //!This getFullName will go inside the prototype property of the createUser Constructor function.
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(CreateUser);
console.log(typeof CreateUser);
console.dir(CreateUser);
console.dir(CreateUser.prototype);

const user1 = new CreateUser("Keshav", "Sharma", 23);
console.log(user1);

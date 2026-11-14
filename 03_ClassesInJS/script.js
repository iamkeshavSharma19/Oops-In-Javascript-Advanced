console.log("Namaste Javascript")

//?Behind the scenes, this CreateUser class is a function only.

class CreateUser {
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(CreateUser);
console.log(typeof CreateUser);
console.dir(CreateUser);
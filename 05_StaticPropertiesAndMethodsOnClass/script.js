console.log("Namaste Javascript");

class CreateCharacter {

  constructor(firstName, lastName, age) {

  }

  getBirthYear() {
    return new Date.getFullYear() - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

}
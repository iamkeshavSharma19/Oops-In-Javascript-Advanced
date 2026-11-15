console.log("Namaste Javascript");

class CreateCharacter {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //?Creating a static property on the class CreateCharacter.
  //?this static property will not be accessible on the object.
  //?It will be accessible on the class only.
  // static hi = "hello";

  //!The other way of putting static Methods on the class only

  static {
    //!Inside static block this points to the class / constructor function.
    console.log(this);
    this.hi = "hello",
    this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    }
  }

  getBirthYear() {
    return new Date.getFullYear() - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

}

const user1 = new CreateCharacter("Harry", "Potter", 20)
console.dir(CreateCharacter);
console.log(CreateCharacter.prototype);
console.log(user1.__proto__);
console.log(CreateCharacter.prototype === user1.__proto__);
console.log(user1.hi);//undefined
console.log(CreateCharacter.hi);//hello
console.log(CreateCharacter.getFullName());

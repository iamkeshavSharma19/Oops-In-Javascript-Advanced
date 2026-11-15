console.log("Namaste Javascript");

class CreateUser {
  #age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    //?If I want to make this age a private property,what I can do is,in front of age I can write #.
    //~By doing this, you cannot access this #age outside this CreateUser class.
    this.#age = age;
  }

  getBirthYear() {
    //!But we can surely access getFirstName inside the class
    console.log(this.#getFirstName());
    return new Date().getFullYear() - this.#age;
  }
  
  //!Inside the class we can also make a method as a private class field.
  
  //!When we will make this method private so what happen is that this method will not be added inside the prototype property of the CreateUser class/constructor function.That means it will also not be added inside __proto__ of the object,that means we cannot call this method on the object i.e this method is not accessible outside this class.
  #getFirstName() {
    return this.firstName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Keshav", "Sharma", 23);

console.log(user1);
console.dir(CreateUser);
console.log(CreateUser.prototype);
console.log(user1.__proto__);
console.log(CreateUser.prototype === user1.__proto__);
console.log(user1);
//! console.log(user1.#age);You cannot access the outside the class or constructor function, because it is an private property.
console.log(user1.getBirthYear());


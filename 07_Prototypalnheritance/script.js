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

// console.log(user1);
// console.log(User.prototype);
// console.log(user1.__proto__);
// console.log(User.prototype === user1.__proto__);
// console.log(user1.fullName);
// user1.fullName = "Ronald Weasely";
// console.log(user1);

//?Now I want to create an another class Student.In Student Class I want to access the properties, methods and Variables of the User class,We will achieve that using extends Keyword.
class Student extends User {
  constructor(firstName, lastName, age, standard) {
    //?pass those parameters inside the super, which needs to be passed,while calling the constructor of parent class, super will call the constructor of the parent class with the parameters passed inside the super.
    super(firstName, lastName, age);
    this.standard = standard;
  }

  study() {
    return `Studying`;
  }
}

// console.log(student1);
// console.log(Student.prototype === student1.__proto__);

class Employee extends User {
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age);
    this.company = company;
  }
}

const employee1 = new Employee("Keshav", "Sharma", 23, "Infosys");
console.log(employee1);
const student1 = new Student("Brock", "Lesnar", "19", 12);
console.log(student1);
console.log(student1.study());
console.log(student1.firstName);
const user1 = new User("Harry", "Potter", 20);
console.log(user1);

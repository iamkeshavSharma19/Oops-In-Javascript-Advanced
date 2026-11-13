//?Whenever we call a function with the new keyword,that function by default returns a object only, whether you return something or not.

//?Whenever we call a function with new keyword, it creates an empty object and also automatically returns that object also.empty object is returned and a label is attached to it, that label is basically the construtor function with which that object is being created.

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

User.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
}


const user1 = new User("Keshav", "Sharma", 23);

const user2 = new User("Roman", "Reigns", 41);

console.log(user1);

console.log(user2);

console.log(User.prototype);
//!Whenever we create an object using a constructor function,then the prototype property of that constructor function gets attached with that object [let say user1],but it's name will not prototype,it's name would be __proto__

console.log(user1.__proto__);
//? Constructor function's prototype === object.__proto__
console.log(User.prototype === user1.__proto__);
console.log(user1.getBirthYear());
console.log(user2.getBirthYear());

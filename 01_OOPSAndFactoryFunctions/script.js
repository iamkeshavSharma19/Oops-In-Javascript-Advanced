const user = {
  firstName: "Keshav",
  lastName: "Sharma",
  age: 23,
  //! Object Oriented Programming === Here also called as Encapsulation
  getAgeYear: function () {
    return new Date().getFullYear() - user.age;
  },
};

console.log(new Date().getFullYear()); //?for getting the current Year.

//& functional programming
function getAgeYear(age) {
  return new Date().getFullYear() - age;
}

console.log(getAgeYear(user.age));

//? Object Oriented Programming
console.log(user.getAgeYear());

// ? Encapsulation is an object-oriented programming principle in which an object’s data (attributes) and the methods that operate on that data are bundled together into a single unit, typically a class, while the internal state is hidden from the outside world. Access to the data is restricted and allowed only through a well-defined public interface (such as getters, setters, or other methods).

// ? Key points:

// ? Bundling: data and the behavior that manipulates it live together in one unit.
// ? Information hiding: internal details are made private, so external code cannot access or modify them directly.
// ? Controlled access: the object decides how its data may be read or changed, which allows validation and protects its integrity.

//& Abstraction === “Abstraction means hiding implementation details and exposing only the essential features of an object or function.”

//~What if i want to create multiple users ? I again have to create another object, for solving this problem, factory functions came into the Picture.

function createUser(firstName, lastName, age) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };

  return user;
}

const user2 = createUser("Keshav", "Sharma", 23);

console.log(user2);
console.log(user2.getAgeYear());


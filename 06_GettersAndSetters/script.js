console.log("Namaste Javascript");

const user = {
  firstName: "Harry",
  lastName: "Potter",

  get fullName() {
    //?getter in javascript.
    //?When we use get keyword, inside console this is coming ==> fullName: (...),the moment we will click on these 3 dots, this fullName function will be called.when I simply try to access user.fullName, it will directly give me Harry Potter.
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user);
console.log(user.fullName);

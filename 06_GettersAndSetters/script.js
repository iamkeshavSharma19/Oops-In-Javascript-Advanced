console.log("Namaste Javascript");



const user = {
  firstName: "Harry",
  lastName: "Potter",

  get fullName() {
    console.log("getting full name ...");
    //?getter in javascript.
    //?When we use get keyword, inside console this is coming ==> fullName: (...),the moment we will click on these 3 dots, this fullName function will be called.when I simply try to access user.fullName, it will directly give me Harry Potter.
    return `${this.firstName} ${this.lastName}`;
  },

  //!Setters In Javascript.
  set fullName(value) {
    console.log(`Setting the full name`);
    console.log(value);
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

console.log(user);

//!See fullName is basically a function,but by using 'get' keyword in front of this function, we are accessing fullName as a property not as a function.That is why we are not calling fullName as the function by using close parenthesis.
console.log(user.fullName);

//?Setters
//? when we do this ==> user.fullName = "Ronald Weasely", then set fullName() function will be called.
user.firstName = "Keshav";
user.lastName = "Sharma";
user.fullName = "Ronald Weasely";
console.log(user);

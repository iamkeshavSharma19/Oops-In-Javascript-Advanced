//?Here By Making this function in the global space we have also achieved the Polymorphism.
//?Polymorphism means “one thing, many forms.” The word comes from Greek: poly = many, morph = forms.
//? In programming:
//? The same method name behaves differently depending on which object it is called on.
function getAgeYear () {
  console.log(this);
  //?this points out to that object from where this method has been called. 
  return new Date().getFullYear() - this.age;
}

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear
  };

  return user;
}

const user1 = createUser("Keshav", "Sharma", 23);
console.log(user1);

const user2 = createUser("Roman", "Reigns",41);
console.log(user2);

console.log(user1.getAgeYear === user2.getAgeYear); //~true

const user1AgeYear = user1.getAgeYear();
console.log(user1AgeYear);


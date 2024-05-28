/** Object
let person = {
  name: "nguyenhnt",
  age: 19,
  address: "189 chu văn an",
  nameAndAge: function () {
    return console.log(this.name + " and " + this.age);
  },
};
person.phone = "iOS";
person.age = 22;
console.log(person.nameAndAge());
*/

// Object constructor
function User(firstName, lastName, number, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.number = number;
  this.address = address;
}
let empolly = new User("kha", "nguyen", "123456", "BT");
empolly.title = "Heaader";
console.log(empolly);

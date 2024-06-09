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

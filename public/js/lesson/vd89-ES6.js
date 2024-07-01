// 1. Let, const --> OK
// 2. Temlate Literals --> OK
// 3. Multi-line String --> OK
// 4. Arrow function --> OK
// 5. Classes --> OK
// 6. Default parameter values --> OK
// 7. Destructuring --> OK
// 8. Rest patameters --> OK
// 9. Spread --> OK
// 10. Enhanced object literals --> Định nghĩa key, method cho object
// 11. Tagged template literal --> OK
// 12. Modules --> OK

// class Person {
//   constructor(name, age, birday) {
//     this.name = name;
//     this.age = age;
//     this.birday = birday;
//   }
//   getName() {
//     return this.name;
//   }
//   getAge() {
//     return this.age;
//   }
//   getBirday() {
//     return this.birday;
//   }
// }

// const myPerson = new Person("Nguyên", 19, "24/9/2004");

// console.log(myPerson);

// let array1 = ["PHP", "ReactJS"];
// let array2 = ["Javascript", "Ruby", "Dart"];
// let array3 = [...array2, ...array1];
// console.log(array3);

// let fieldName = "name";
// let fieldPrice = "price";

// let course = {
//   name: "Javascript",
//   [fieldName]: "PHP",
//   [fieldPrice]: 1000,
// };

// console.log(course);

// function highlight([fisrt, ...strings], ...values) {
//   return values
//     .reduce(
//       (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//       [fisrt]
//     )
//     .join("");
// }
// let coures = "PHP";
// let price = 250;

// const html = highlight`Giá của khóa học ${coures} là ${price} coin`;
// console.log(highlight);
// console.log(html);

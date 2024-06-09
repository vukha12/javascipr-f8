// // định nghĩa prototype forEach2
// Array.prototype.forEach2 = function (callback) {
//   for (let index in this) {
//     // hasOwnProperty kiểm tra xem index T/F
//     if (this.hasOwnProperty(index)) {
//       callback(this[index], index, this);
//     }
//   }
// };

// let coursesForEach2 = ["PHP", "Javascript", "Java"];

// // duyệt qua từng phần tử của mảng
// console.log("--- forEach2 ---");
// coursesForEach2.forEach2((e, index) => {
//   console.log(index, e);
// });

/**---------------------------------------------------------------------------------------------------- */
// // định nghĩa prototype filter2
// Array.prototype.filter2 = function (callback) {
//   let output = [];

//   for (let index in this) {
//     if (this.hasOwnProperty(index)) {
//       let result = callback(this[index], index, this);
//       if (result) {
//         output.push(this[index]);
//       }
//     }
//   }
//   return output;
// };
// let manyFruist = [
//   { id: 1, name: "Banana" },
//   { id: 2, name: "Mango" },
//   { id: 3, name: "Banana" },
//   { id: 4, name: "Apple" },
//   "Banana",
//   "Banana",
// ];

// // tìm string = 'Banana' trong manyFruist và trả về một arrays mới
// console.log("--- filter2 ---");
// let isFree = manyFruist.filter2((e, index, array) => {
//   return e.name === "Banana" || e === "Banana";
// });

// console.log(isFree);

/**----------------------------------------------------------------------------------------------------*/
// // định nghĩa lại hàm some2
// Array.prototype.some2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       let bool = callback(this[index], index, this);
//       if (bool) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// let courses = [
//   {
//     id: 1,
//     name: "Javascript",
//     coin: 1,
//   },
//   {
//     id: 2,
//     name: "PHP",
//     coin: 1,
//   },
//   {
//     id: 3,
//     name: "Ruby",
//     coin: 0,
//   },
// ];
// console.log("---some2---");
// let isFree = courses.some2((elment, index, arra) => {
//   return elment.name === "Ruby";
// });
// console.log(isFree);

/**----------------------------------------------------------------------------------------------------*/
Array.prototype.every2 = function (callback) {
  let output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      let result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

let courses = [
  {
    id: 1,
    name: "Rubys",
    coin: 1,
  },
  {
    id: 2,
    name: "Ruby",
    coin: 1,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
];

let result = courses.every((e, index, array) => {
  return e.name === "Ruby";
});

console.log(result);

/**
 *      Callback? - Phần 1
 * 1. là hàm
 * 2. được truyền qua đối số
 * 3. được gọi lại (trong hàm nhận đối số)
 */

// function myFunction(value, number) {
//   if (typeof value === "function") {
//     value(2, 5);
//   }
//   console.log(number);
// }

// function myCallBack(a, b) {
//   console.log("sum:", a + b);
// }

// myFunction(myCallBack, 123);

/**
 *      Callback? - Phần 2
 */
Array.prototype.find2 = function (callback) {
  let str = "",
    arrayLengt = this.length;
  for (let i = 0; i < arrayLengt; i++) {
    let result = callback(this[i]);
    if (result === "Mango") {
      str = result;
    }
  }
  return str;
};

let fruists = ["Banana", "Mango", "Banana"];

// let nameFruist = fruists.find((e) => {
//   return e == "Mango";
// });
// console.log(nameFruist);

let isFree = fruists.find2((elemt, index) => {
  return elemt;
});

console.log(isFree);

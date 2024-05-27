let a = 6;
let b = a++; // hậu tố: gán rồi mới công
let c = --a; // tiến tố: trừ rồi mới gán

let output = b + c;

console.log("output: ", output);
console.log("c: ", c, "b: ", b);

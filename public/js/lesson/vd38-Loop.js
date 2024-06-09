let arrays = ["JS", "PHP", "ReactJS", "NextJS", "ValueJS"];

let string = "Javascript";

// for/of loop
// for (var index of string) {
//   console.log(index);
// }

// while loop
// let i = 0;
// while (i < arrays.length) {
//   console.log(arrays[i]);
//   i++;
// }

// do/while loop
// let i = 0;

// do {
//   i++;
// } while (i < arrays.length);

// Break & continue
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

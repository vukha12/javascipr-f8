/**
 *  onkeydown / onkeyup
 *
 *
 */
// var inputElement = document.querySelector("input");

// inputElement.onkeyup = function (e) {
//   console.log(e.which);
//   switch (e.which) {
//     case 27:
//       console.log("Exit");
//       break;
//     case 13:
//       console.log("Enter");
//       break;
//   }
// };

/**
 * PreventDefault
 * StopPropagation
 */

// let ulElement = document.querySelector("ul");

// ulElement.onmousedown = (e) => {
//   e.preventDefault();
// };

// ulElement.onclick = (e) => {
//   console.log(e.target);
// };

document.querySelector("div").onclick = () => {
  console.log("DIV");
};

document.querySelector("button").onclick = (e) => {
  e.stopPropagation();
  console.log("Click me!");
};

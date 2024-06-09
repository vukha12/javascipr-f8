let textTitles = document.querySelectorAll("h1");

// textTitles.forEach((element, index) => {
//   if (element.onclick) {
//     console.log(element.innerText);
//   }
// });

for (let i = 0; i < textTitles.length; ++i) {
  textTitles[i].onclick = function (element) {
    console.log(element);
  };
}

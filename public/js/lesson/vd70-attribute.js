// DOM attributes
// setAttribute
// getAttribute

// Element
let element = document.querySelector("#title");

element.classList.add("border");

setTimeout(() => {
  element.classList.remove("border");
  element.style.color = "green";
}, 5000);

/**
 * Fetch
 *
 */

let url = `https://jsonplaceholder.typicode.com/todos`;
fetch(url)
  .then((response) => response.json())
  .then((todos) => {
    let htmls = todos.map((todo) => {
      return `<li>
      <h2>${todo.title}</h2>
      <p>${todo.completed}</p>
      </li>`;
    });

    let html = htmls;
    let commentBlock = (document.querySelector(".comment-block").innerHTML =
      html);
  });

function logMovies() {
  const response = fetch(url);
}

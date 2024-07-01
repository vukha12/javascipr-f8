let courseAPI = "http://localhost:3000/courses";

function start() {
  getCourse(renderCourses);

  handleCreateForm();
}

start();

function getCourse(callback) {
  fetch(courseAPI)
    .then((response) => {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  let options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  fetch(courseAPI, options)
    .then((response) => {
      response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  let options = {
    method: "DELETE",
  };
  fetch(courseAPI + `/${id}`, options)
    .then((response) => {
      response.json();
    })
    .then(() => {
      let courseItem = document.querySelector(`.course-item-${id}`);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

function renderCourses(courses) {
  let listCoursesBlock = document.querySelector("#list-courses");
  let htmls = courses.map(function (course) {
    return `<li class='course-item-${course.id}'>
    <h4>${course.name}</h4>
    <p>${course.description}</p>
    <button onclick='handleDeleteCourse(${course.id})'>Xóa</button>
    </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  let createBtn = document.querySelector("#create");

  createBtn.addEventListener("click", () => {
    let name = document.querySelector('input[name="name"]').value;
    let description = document.querySelector('input[name="description"]').value;

    let formData = {
      name: name,
      description: description,
    };

    createCourse(formData);
  });
}

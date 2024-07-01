// Promise
/**
 * Sync : Đồng bộ
 * Async : Không đồng bộ
 * Nỗi đau
 */

// 1. Pendding: khởi tạo xong Promise
// 2. Fulfilled: gọi tới hàm resolve
// 3. Rejected: gọi tới hàm reject
// let myPromise = new Promise(
//   // Executor
//   function (myResolv) {
//     // Logic

//     // Successully
//     myResolv(123);
//   }
// );

// myPromise
//   .then(function (result) {
//     return result;
//   })
//   .then((newResult) => {
//     console.log(newResult);
//   })
//   .catch(function () {
//     console.log("Failure!");
//   })
//   .finally(function () {
//     console.log("Done!");
//   });

// function logger(log, type = "log") {
//   console[type](log);
// }

let users = [
  {
    id: 1,
    name: "Kiên Đặng",
  },
  {
    id: 2,
    name: "F8 Official",
  },
  {
    id: 3,
    name: "Đình Hải",
  },
];
let comments = [
  {
    id: 1,
    content: "Sao chưa dậy?",
    user_id: 1,
  },
  {
    id: 2,
    content: "Giờ dậy nè",
    user_id: 2,
  },
];

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByID(userIds) {
  return new Promise(function (resolve) {
    let result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    let userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByID(userIds).then(function (user) {
      return {
        users: user,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    let commentBlock = document.querySelector(".comment-block");

    let html = "";
    data.comments.forEach((comment) => {
      let user = data.users.find((user) => {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name} : ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });

// Function

/**
 * Arguments : chỉ khai báo trong hàm
 */
function writeLog() {
  let total = 0;
  for (var paramater of arguments) {
    total += paramater;
  }
  return total;
}

function showNovel() {
  function nameNovel() {
    console.log("Chàng ngốc");
  }
  function authorName() {
    console.log("Dostoyevsky");
  }
  nameNovel();
}

showNovel();

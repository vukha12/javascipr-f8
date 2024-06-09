// 1. xác định diểm dừng
// 2. Logic handle => tạo ra điểm dừng

function giaiThua(num) {
  if (num > 0) {
    return num * giaiThua(num - 1);
  }
  return 1;
}

console.log(giaiThua(4));

function fib(num) {
  let numberFirst = 1,
    numberSencond = 0,
    temp;

  while (num > 0) {
    temp = numberFirst;
    numberFirst = numberFirst + numberSencond;
    numberSencond = temp;
    num--;
  }
  return numberSencond;
}

console.log(fib(7));

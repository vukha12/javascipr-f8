/**
 *          Math object
 * Math.PI // 3.14
 * Math.round() // làm tròn số thập phân sang số nguyên
 * Math.abs() // giá trị tuyệt đối (biến số - thành số +)
 * Math.ceil() // làm tròn trên (4,1 -> 5)
 * Math.floor() // làm tròn dưới (4,99 -> 4)
 * Math.random() // trả về số thập phân > 1
 * Math.min() //
 * Math.max() //
 * kết hợp floor vs random
 */

let numbers = [1, 32, 834, 23, 753, 0, 23, 7562];
numbers = Math.max(...numbers);

console.log(typeof Math);

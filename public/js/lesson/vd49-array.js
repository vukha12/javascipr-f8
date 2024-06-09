/**
 * forEach()
 * every() // phải đúng hết thì mới trả về true, ngược lại thì false
 * some() // trả về kết quả lun khi dữ liệu đúng return
 * find() // tìm phần tử trong mảng rồi trả về 1
 * filter() // tìm phần tử trong mảng rồi trả về danh sach
 * map() //
 * reduce()
 */
let courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 1,
  },
  {
    id: 2,
    name: "PHP",
    coin: 1,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "Java",
    coin: 1,
  },
  {
    id: 5,
    name: "Java",
    coin: 10,
  },
];
let totalCoin = courses.reduce((total, course) => (total += course.coin), 0);
// console.log(totalCoin);

// bài tập
// lấy name của courses
let nameCoures = courses.reduce((course, topic) => {
  return course.concat(topic.name);
}, []);

console.log(nameCoures);

// thêm Title: trước naame courses
let htmls = nameCoures.map((name) => {
  return "Title: " + name;
});
console.log(htmls);

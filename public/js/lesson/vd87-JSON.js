//-- JSON

/**
 * 1. Là một định dạng dự liệu (chuỗi)
 * 2. Javascript Object Notation
 * 3. JSON: String, Number, Boolean, Null, Array, Object
 * 4. stringify: từ JS types -> JSON  / Parse: từ JSON -> Javascript types
 */

// JSON kiểu array
// let json = '["Javascript","PHP"]'

// JSON kiểu object
let json = '{"name":"Son Dang","age": 24,"check":"true"}';

// let json = '"abs"';

let object = JSON.parse(json);

console.log(object.name);

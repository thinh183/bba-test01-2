# Phạm vi Biến
## phạm vi(scope)
-global
-function scope
-box scope
Hoisting
# Break, Continue
-Break: thoát khỏi vòng lặp ngay lập tức
-Continue:bỏ qua, không chạy tiếp

## Break
- dùng để thoát khỏi vòng lặp ngay lập tức khi thỏa mãn điều kiện
Ví dụ
const numbers=[1,3,5,7,9]
let fEven=null;
for (let num of numbers){
    if (num%2 === 0 ){
        fEven=num
        break/ đừng ngay khi tìm thấy
    }
}
1
## Countinue
- Bỏ qua phần còn lại của vòng lặp và chuyển sang lần tiếp theo
for (let num of numbers){
    if (num%2 === 0 ){
        fEven=num
        break/ đừng ngay khi tìm thấy
    }
}
1 3 5 7 9
## if, else if, else
# FOR Nâng cao
## for ... in loop
- đùng dể duyệt qua các thuộc tính có thể đếm được của một object, bao gồm các thuộc tính kế thừa
// với Object
const person={
    name:" ",
    age: ,
    city: ,

};
for ( let key in person){
    console.log(key +" " +person [key]);

}
output
name
age,city
// Với Array (không khuyến khích)
const colors = ["red", "green", "blue"];
colors.customProperty = "rainbow";
for (let index in colors) {
console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
# hàm hỗ trợ
### trim()
- cắt đi khoảng trắng ở đầu và cuối
### toLowerCase , toUpercase: In thường, in hoa
### includes(): trả về Boolean, kiểm tra chuỗi có còn chuỗi con nào không
### replace(): Thay thế giá trị trong biến bằng giá trị khác
trim()  cắt đi khoảng trắng ở đầu và cuối
let className='            k18 PLW ads' ;
console.log(className);
console.log(className.trim());
console.log(className.toLocaleLowerCase()); // in thường all
console.log(className.toLocaleUpperCase()); // in hoa all
console.log(className.includes('K18')); // in hoa all
console.log(className.replace('PLW','PL'));// thay thế
console.log(className.indexOf('PLW'))// tìm chuỗi con
# JS-Array util
## Map
- map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảnggốc. Trả về mảng mới có cùng độ dài
const students = ['An', 'Bình', 'Cường'];
const studentList = students.map((name, index) =>
({
id: index + 1,
name: name,
code: `SV00${index + 1}`
}));

console.log(studentList);
// [
// { id: 1, name: 'An', code: 'SV001' },
// { id: 2, name: 'Bình', code: 'SV002' },
// { id: 3, name: 'Cường', code: 'SV003' }
// ]
## filter
- filter: Tạo mảng mới chỉchứa các phần tử thỏamãn điều kiện trong hàm
callback. Trả về mảng đã được lọc
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2
=== 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8,
9, 10] - mảng gốc không đổi
## Find
- Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu không tìm thấy
const numbers = [1, 5, 3, 8, 2, 10, 7];
// Tìm số chẵn đầu tiên
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 8 (không phải 2 hay 10)
// Tìm số lớn hơn 6
const greaterThanSix = numbers.find(num => num > 6);
console.log(greaterThanSix); // 8 (dừng ngay khi tìm thấy)
// Không tìm thấy
const negative = numbers.find(num => num < 0);
console.log(negative); 
// undefined 
## reduce
reduce: Duyệt qua mảng và tích lũy các phần tử
thành một giá trị duy nhất (số, chuỗi, object...) dựa trên hàm callback
## sort
sort: Sắp xếp các phần tử trong mảng theo thứ tự (mặc định làalphabet/tăng dần). Thay đổi mảng gốc.
LƯU Ý:// Compare function trả về:
// - Số âm: a đứng trước b
// - Số 0: giữ nguyên thứ tự
// - Số dương: b đứng trước a
// Giảm dần
const numbers3 = [10, 5, 40, 25, 1000, 1];
numbers3.sort((a, b) => b - a);
console.log(numbers3); // [1000, 40, 25, 10, 5,
1]
## shift
- Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làmgiảm độ dài

const fruits = ['apple', 'banana', 'orange',
'grape'];
const firstFruit = fruits.shift();

console.log(firstFruit); // 'apple' - phần tử bị
xóa
console.log(fruits); // ['banana', 'orange',
'grape'] - mảng đã thay đổi

// Shift từ mảng rỗng
## unshift
- Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc
và trả về độ dài mới
const empty = [];
const result = empty.shift();
console.log(result); // undefined
console.log(empty); // []








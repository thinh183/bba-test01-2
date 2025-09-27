# VERSION CONTROL SYSTEM
# Git
cd:Change directory:thay đổi thư mục,thay đổi sang folder ta muốn làm việc cùng. Trước khi git init.

## git là gì
là Control system, dùng để quản lý phiên bản dùng nhiều người với nhau
## git và github
### git
là một phần mềm,cài trên máy, commandline tool.
là công cụ quản lý phiên bản, đưa file vào Git repository
### github
## 3 vùng trong git
### working directory
git init: khởi tạo thư mục quản lý bởi git. 
Sau khi git init, các file sẽ nằm trong wd


git config user.name"name, config để làm gì

### staging area

git add ./flie, git add. đưa tất cả các file từ wd- stg

### repository
git commit -m"message": đưa file từ st-a->repo với tin nhắn "messange
## Git-Key takeaways
### Khởi tạo
- git init: khởi tạo thư mục quản lý(repo) bởi git
- sau khởi tạo, cần cấu hình git;
 +cài cấu hình cho toàn bộ máy tính(default), cấu hình global
 git config --global user.name "Nguyen Van A"
 git config --global user.email "a.personal@example.com"
 Từ giờ, mọi repo trên máy sẽ mặc định commit với:
 Tên: Nguyen Van A
 Email: a.personal@example.com
 +cho 1 repo( đứng tại repo đó)
 git config.user.name"<name>"
 git config.user.email"<email>"
# JavaScript
-comment://
## Biến, Hằng
-khai báo biến: Var, let, const
### quy tắc đặt tên biến
-bắt đầu bằng chữ
-không chứa dấu cách
-không là các từ khóa trong js: for,var,let...
### Var và let
- var ra đời sau let, sử dụng an toàn hơn
-var cho phép khai báo lại, let thì không
VD: var x=1; var x=2// console.log->2 oke
    let i=1;let i=2// lỗi 
- var có phạm vi global, let thì phạm vi theo block(ngoặc nhọn)
{
    var a=10;
    let b=11
}
console.log(a)//10
console.log(b)//lỗi b chưa được define
### Hằng
- Dùng để khai báo giá trị chỉ dùng 1 lần, không thể thay đổi.
- const
### Khi nào dùng biến, hằng
- mặc định dùng const-giúp code an toàn hơn
- chỉ dùng let khi chắc chắn cần gán giá trị
## Kiểu dữ liệu JS-data type
-Number,string(ký tự)
-boolean(true/false)
-undefined..
-Kiểu tham thiếu: objects
check kiểu dữ liệu:type of(variable)
## Toán sử so sánh
- so sánh bằng:===(so sánh cả giá trị và kiểu giữ liệu)
-lớn hơn nhỏ hơn: <, >,<=, >=
-khác:!==
## Toán tử logic
- &&: và
- ||: hoặc
## Toán tử 1 ngôi
-prefix: toán tử nằm ở phía trước- tăng trước trả về sau
++x;
--x;
-postfix: toán tử nằm sau, trả về trước tăng sau
x++;
x--;
let a=10
b++: trả về 10 cho b sau đó mới tăng lên
++a: tăng a lên 11 rồi trả về=>b=11
## toán tử toán học
- + - *,/
## Câu điều kiện
- cú pháp: if(điều kiện){
  // code
}
- điều kiện đúng code sẽ chạy
## Vòng lặp
- dùng để lặp lại 1 đoạn logic, số lần nhất định hoặc vô hạn tùy điều kiện dừng
-for(điều kiện khởi tạo; điều kiện lặp, cập nhật){

}
Trong đó:
- Điều kiện khởi tạo; chạy 1 lần duy nhất khi vòng lặp bắt đầu
- Điều kiện lặp:Nếu đúng thì chạy tiếp, sai thì dừng
-Cập nhật:chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm

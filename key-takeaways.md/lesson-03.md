# GIT 
## Undo
git restore --stage "file: đưa file từ staging về lại working directory
## uncommit đưa file từ repo về working directory
-git commit --amend: Vào giao diện thay đổi message của commit gần nhất.
-git commit --amend -m"message": thay đổi message của commit gần nhất trực tiếp mà không cần vào giao diện
-git restore --staged <file>: Đưa <file> từ vùng staging về working directory
-git reset HEAD~1: đưa file gần nhất từ repository về working directory

## GIT BRANCHING
- Git sử dụng nhánh để tạo ra các phiên bản riêng của code, tránh ảnh hưởng tới bản gốc(main)
git config --global init.defaultBranch main
→ cấu hình: khi khởi tạo, đặt nhánh mặc định là nhánh main
git branch: xem danh sách nhánh
git branch tên nhánh: tạo nhánh mới
git checkout<tên nhánh>:chuyển sang nhánh mới
git check out -b<tên nhánh>: vừa tạo vừa chuyển sang nhánh mới
git branch -D<tên nhánh>: xóa  nhánh
Lưu ý: LUÔN PULL CODE VỀ TRƯỚC KHI TẠO NHÁNH
# JAVASCRIPT
## Convention
- snake_case: chưa dùng
- snake-case:tên file
- snakecase: tên biến
- SnakeCase: tên class
## Object
- Đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số
- khai báo, sử dụng, gán lại
- user.age
let person = {
    name: 'Thịnh',
    adress: {
        street: 'KDT',
        city: 'Hà Nội',
        country: 'Việt Nam'

    }

}
## Array: Mảng
- Tạo mảng
  +Khai báo
  +Sử dụng
- Truy xuất mảng
 + Độ dài mảng: Length
 + Độ dài phần tử theo index:[0],[1],[2]...
## Function
- là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc tính toán cụ thể
- Khai báo function <name>(){
    // code
    return value
}

function getTopstudent(student, thrhore) {
    let result = []
    for (let i = 0; i < student.length; i++) {
        if (student[i].score >= thrhore) {
            result.push(student[i].name)
        }
    }
    return result
}



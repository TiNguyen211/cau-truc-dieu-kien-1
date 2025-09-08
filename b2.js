let age = prompt("Nhập tuổi:");
let result = "";

if (age >= 15) {
    result = "Đủ điều kiện vào học lớp 10";
} else {
    result = "Chưa đủ điều kiện vào học lớp 10";
}

document.write("Kết quả: " + result + "");
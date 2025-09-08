let number = prompt("Nhập một số nguyên bất kỳ:");
let result = "";

if (number > 0) {
    result = number + " lớn hơn 0";
} else if (number < 0) {
    result = number + " nhỏ hơn 0";
} else {
    result = "Số bằng 0";
}

document.write("<h2>Kết quả: " + result + "</h2>");
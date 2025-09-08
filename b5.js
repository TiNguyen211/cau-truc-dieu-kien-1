let test = prompt("Nhập điểm kiểm tra:");
let mid = prompt("Nhập điểm giữa kỳ:");
let final = prompt("Nhập điểm cuối kỳ:");

let avg = (test + mid + final) / 3;
let grade = "";

if (avg >= 8) {
    grade = "Giỏi";
} else if (avg >= 6.5) {
    grade = "Khá";
} else if (avg >= 5) {
    grade = "Trung bình";
} else {
    grade = "Yếu";
}

document.write("<h2>Điểm trung bình: " + avg.toFixed(2) + " - Xếp loại: " + grade + "</h2>");
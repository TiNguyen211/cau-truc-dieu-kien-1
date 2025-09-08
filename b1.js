let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");
let result = "";

if (b === 0) {
    result = "Không thể chia cho 0";
} else if (a % b === 0) {
    result = a + " chia hết cho " + b;
} else {
    result = a + " không chia hết cho " + b;
}

document.write("Kết quả: " + result + "");
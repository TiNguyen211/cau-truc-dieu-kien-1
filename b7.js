let minutes = prompt("Nhập số phút gọi trong tháng:");
let cost = 0;

if (minutes <= 50) {
    cost = minutes * 600;
} else if (minutes <= 200) {
    cost = 50 * 600 + (minutes - 50) * 400;
} else {
    cost = 50 * 600 + 150 * 400 + (minutes - 200) * 200;
}

document.write("<h2>Cước điện thoại: " + cost.toLocaleString() + " VND</h2>");

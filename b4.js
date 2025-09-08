let a = prompt("Nhập số thứ nhất: ");
let b = prompt("Nhập số thứ hai: ");
let c = prompt("Nhập số thứ ba: ");
let max = a;

if (b > max) max = b;
if (c > max) max = c;

document.write("<h2>Số lớn nhất là: " + max + "</h2>");
let sales = prompt("Nhập doanh số bán hàng (VND):");
let commission = 0;

if (sales >= 100000000) {
    commission = sales * 0.1; // 10%
} else if (sales >= 50000000) {
    commission = sales * 0.07; // 7%
} else if (sales >= 20000000) {
    commission = sales * 0.05; // 5%
} else {
    commission = sales * 0.02; // 2%
}

document.write("<h2>Hoa hồng nhận được: " + commission.toLocaleString() + " VND</h2>");
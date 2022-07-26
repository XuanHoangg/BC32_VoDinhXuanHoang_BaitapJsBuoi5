/**
 * Bài 1: Mô hình 3 khối
 *      Input: Thông tin user nhập vào
 *      Progress : B1: Tạo hàm sự kiên onclick
 *                 B2: Tạo hàm tính toán
 *      Output: In ra màn hình kết quả
 */
function taxMoney() {
    //B1: DOM
    let fullName = document.getElementById('fullName').value;
    let moneyInYear = +document.getElementById('moneyInYear').value;
    let people = +document.getElementById('people').value;
    let currentFomat = new Intl.NumberFormat('vn-VN');
    //B2: style thẻ  display thành block và in ra màn hình
    document.getElementById('show1').style.display = "block";
    document.getElementById('show1').innerHTML = "Họ tên: " + fullName + " - Thuế thu nhập cá nhân: " + currentFomat.format(calcTaxMoney(moneyInYear, people)) + " VND";
}
// moneyInYear: tổng thu nhập trong năm
// people : số người phụ thuộc
function calcTaxMoney(moneyInYear, people) {
    //B1: Tạo variable price = moneyInYear - 4e+6 - people * 1600000;
    // 4e+6 , 16e+5 : số trong đề bài cho sẵn ; 
    let price = moneyInYear - 4e+6 - people * 16e+5;
    //B2: Kiểm tra nếu price <= 0: thông báo cho user nhập lại thu nhập
    if (price <= 0) {
        alert("Số tiền thu nhập không hợp lệ");
        return 0;
    }
    //b3: tính toán theo công thức trong bảng
    if (price <= 60e+6) {
        price *= 0.05;
    } else if (price <= 120e+6) {
        price *= 0.1;
    } else if (price <= 210e+6) {
        price *= 0.15;
    } else if (price <= 384e+6) {
        price *= 0.20;
    } else if (price <= 624e+6) {
        price *= 0.25;
    } else if (price <= 960e+6) {
        price *= 0.30;
    } else {
        price *= 0.35;
    }
    return price;
}

/**
 * Bài 2: Mô hình 3 khối:
 *      Input: Thông tin user nhập vào
 *      Progress: B1: Tạo hàm clickToShowConnections (hàm này có nghĩa là khi click vào thì khung input số kết nối block ra)
 *                B2: Tạo hàm tính toán giá tiền của từng đối tượng
 *                B3: Tạo hàm sự kiện click vào button
 *      Output: In ra màn hình kết quả
 */
function clickToShowConnections() {
    //B1: DOM
    let clients = document.getElementById('clients').value;
    let connections = document.getElementById('num3');
    //B2: So sánh nếu là company()
    if (clients === "company") {
        connections.style.display = "block";
    } else {
        connections.style.display = "none";
    }
}

function pay() {
    //B1: DOM
    let clients = document.getElementById('clients').value;
    let clientNumber = +document.getElementById('num1').value;
    let channels = +document.getElementById('num2').value;
    let connections = +document.getElementById('num3').value;
    let currentFomat = new Intl.NumberFormat('vn-VN');
    //B2:Hiển thị trên màn hình
    document.getElementById('show2').style.display = "block";
    document.getElementById('show2').innerHTML = "Mã khách hàng: " + clientNumber + "-    Tiền cap: $" + currentFomat.format(calcPay(clients, channels, connections));
}
//channels: số kênh thuê
//connections: số kết nối
function calcPay(clients, channels, connections) {
    //B1: Tạo variable price = 0
    let price = 0;
    //B2: So sánh và áp dụng công thức tính
    // 4.5: phí xử lý hóa đơn
    // 20.5: Phí dịch vụ cơ bản
    // 7.5: tiền thuê/kênh
    //citizenHouse: nhà dân
    if (clients === "citizenHouse") {
        price = 4.5 + 20.5 + channels * 7.5;
    } else if (clients === "company") { // 15:phí xử lý hóa đơn,75:Phí dịch vụ cơ bản cho 10 kết nối đầu;50:tiền thuê/kênh
        if (connections <= 10) {
            price = 15 + 75 + channels * 50;
        } else {
            price = 15 + 75 + (connections - 10) * 5 + channels * 50;
        }
    } else {
        alert("Vui lòng chọn đối tượng");
        return;
    }
    return price;
}



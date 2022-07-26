/**
 * Bài 1: Mô hình 3 khối
 *      Input: Toàn bộ thông tin user nhập vào
 *      Progress: B1: DOM lấy value user nhập
 *               B2: Tạo hàm tính điểm (calcPoint)
 *               B3: Nếu point < realPoint thì in ra thí sinh trượt và tổng điểm
 *                   Nếu point >= realPoint thì in ra thí sinh trượt và tổng điểm
 *      Output: In ra kết quả trên màn hình
 *                   
 */

function result1() {
    //B1: DOM
    let realPoint = +document.getElementById('realPoint').value;
    let point1 = +document.getElementById('point1').value;
    let point2 = +document.getElementById('point2').value;
    let point3 = +document.getElementById('point3').value;
    let area = document.getElementById('area').value;
    let person = +document.getElementById('person').value;
    let show = document.getElementById('show1');
    //B2: Xét display block cho thẻ để hiện kết quả
    show.style.display = "block";
    //B3: Tạo variable = hàm tính điểm
    let point = calcPoint(point1, point2, point3, area, person);
    //B4: Kiểm tra điểm 
    if (point < realPoint) {
        show.innerHTML = "Thí sinh đã trượt tổng số điểm của thí sinh: " + point;
    } else {
        show.innerHTML = "Thí sinh đã đậu tổng số điểm của thí sinh: " + point;
    }
}
// point : điểm trung bình của thí sinh
// realPoint : điểm chuẩn của hội đồng
// point1 : điểm môn 1
// point2 : điểm môn 2
// point3 : điểm môn 3
// area : khu vực ưu tiên
// person : đối tượng ưu tiên
function calcPoint(point1, point2, point3, area, person) {
    let point = 0;
    point = point1 + point2 + point3;
    // area === "A" ===> point +=2 và các khu vực B C X tương tự
    if (area === "A") {
        point += 2;
    } else if (area === "B") {
        point += 1;
    } else if (area === "C") {
        point += 0.5;
    } else if (area === "X") {
        point += 0;
    } else {
        alert("Nhập khu vực sai vui lòng nhập lại");
        return;
    }
    // person === 0 ===> point +=0 và các đối tượng 1 2 3 tương tự
    if (person === 0) {
        point += 0
    } else if (person === 1) {
        point += 2.5;
    } else if (person === 2) {
        point += 1.5;
    } else if (person === 3) {
        point += 1;
    } else {
        alert("Nhập đối tượng sai vui lòng nhập lại");
        return;
    }
    return point;
}

/**
 * Bài 2: Mô hình 3 khối
 *      Input: Toàn bộ thông tin user nhập vào
 *      Progress: B1: DOM
 *               B2: tạo hàm tính tiền điện (electricMoney) và tính theo công thức
 *                   dưới 50kw  ==> kw * 500;
 *                   dưới 100kw ===> 50 * 500 + (kw - 50) * 650;
 *                   dưới 200kw ===> 50 * 500 + 50 * 650 + (kw - 100) * 850;
 *                   dưới 350kw ===> 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
 *                   trên 350kw ===> 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
 *      OutPut: In ra màn hình họ tên và số tiền điện
 */

function result2() {
    //B1: DOM
    let fullName = document.getElementById('fullName').value;
    let kw = +document.getElementById('kw').value;
    let show = document.getElementById('show2');
    let currentFormat = new Intl.NumberFormat('vn-VN');
    //B2: tạo variable = hàm tính tiền điện
    let bill = electricMoney(kw);
    //B3: style thẻ thành block để hiển thị kết quả
    show.style.display = "block";
    show.innerHTML = "Họ tên: " + fullName + " - " + "Tiền điện: " + currentFormat.format(bill);
}

function electricMoney(kw) {
    let calcElectricMoney = 0;
    if (kw <= 50) {
        calcElectricMoney = kw * 500;
    } else if (kw <= 100) {
        calcElectricMoney = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 200) {
        calcElectricMoney = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
        calcElectricMoney = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
        calcElectricMoney = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }
    return calcElectricMoney;
}
























































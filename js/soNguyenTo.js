function kiemTraSNT(n) {
    var flag = true;

    if (n < 2) {
        flag = false;
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

document.getElementById('btnSoNguyenTo').addEventListener('click', () => {
    var n = document.getElementById('inpN').value;
    var content = 'Các số nguyên tố nhỏ hơn ' + n + ': ';

    for (var i = 0; i < n; i++) {
        if (kiemTraSNT(i)) {
            content += i + ' ';
        }
    }
    document.getElementById('thongBao').innerHTML = content;
})
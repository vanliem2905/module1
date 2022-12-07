function Date() {
    let month = +document.getElementById("month").value;
    // let year= +prompt("Nhập năm")
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Có 31 ngày")
            break
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Có 30 ngày")
            break
        case 2:
            if (year%400===0||(year%4===0 && year!==100)){
                alert("Có 29 ngày")
            }else {
                alert("Có 28 ngày")
            }
            break
        default: {
            alert("Nhập sai. Vui lòng nhập lại.Xin cảm ơn!")
        }

    }

}
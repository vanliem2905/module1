function Cong() {
    let numb1 = +document.getElementById("numb1").value;
    let numb2 = +document.getElementById("numb2").value;
    let result = numb1 + numb2;
    document.getElementById("result").innerHTML = result;
}

function Tru() {
    let numb1 = document.getElementById("numb1").value;
    let numb2 = document.getElementById("numb2").value;
    let result = numb1 - numb2;
    document.getElementById("result").innerHTML = result;
}

function Nhan() {
    let numb1 = document.getElementById("numb1").value;
    let numb2 = document.getElementById("numb2").value;
    let result = numb1 * numb2;
    document.getElementById("result").innerHTML = result;
}

function Chia() {
    let numb1 = document.getElementById("numb1").value;
    let numb2 = document.getElementById("numb2").value;
    let result = numb1 / numb2;
    document.getElementById("result").innerHTML = result.toFixed(4);
}

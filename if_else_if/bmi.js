function BMI() {
    let kg = +document.getElementById("weight").value;
    let m = +document.getElementById("height").value;
    let bmi = kg / Math.pow(m, 2)
    if (bmi < 18) {
        document.getElementById("cal").innerHTML = "Your BMI: " + bmi.toFixed(2) + "UnderWeight";
    } else if (bmi < 25.0) {
        document.getElementById("cal").innerHTML = "Your BMI: " + bmi.toFixed(2) + "Normal";
    } else if (bmi < 30.0) {
        document.getElementById("cal").innerHTML = "Your BMI: " + bmi.toFixed(2) + "OverWeight";
    } else {
        document.getElementById("cal").innerHTML = "Your BMI: " + bmi.toFixed(2) + "Obese";
    }

}
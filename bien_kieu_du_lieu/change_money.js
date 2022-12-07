
function changeMoney() {
    let Amount = +document.getElementById("Amount").value;
    let FromCurrency = document.getElementById("From").value;
    let ToCurrency = document.getElementById("ToCurrency").value;
    let result;
    if (FromCurrency === "USD" && ToCurrency === "VND") {
        result = " Tiền được chuyển đổi là: " + (Amount * 23000) + "VND";
    } else if (FromCurrency === "VND" && ToCurrency === "USD") {
        result = "Tiền được chuyển đổi là: " + (Amount / 23000) + "USD";
    } else if (FromCurrency === "VND"&& ToCurrency === "VND") {
        result = "Tiền được chuyển đổi là: " + Amount + "VND";
    } else if (FromCurrency === "USD" && ToCurrency === "USD") {
        result = "Tiền được chuyển đổi là: " + Amount + "USD";
    }
    document.getElementById("money").innerHTML = result;
}
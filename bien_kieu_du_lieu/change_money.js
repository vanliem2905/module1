let result = '';

function changeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromCurrency = document.getElementById("From").value;
    let To = document.getElementById("ToCurrency").value;
    if (FromCurrency == "USD" && Amount == "VND") {
        result = " result " + (Amount * 23000) + "VND";
    } else if (FromCurrency == "VND" && Amount == "USD") {
        result = "result" + (Amount / 23000) + "USD";
    } else if (FromCurrency == "VND") {
        result = "result" + Amount + "VND";
    } else if (FromCurrency == "USD") {
        result = "result" + Amount + "USD";
    }
    document.getElementById("tienDo").innerHTML = result;
}
let screenValue = "0";

function appendToScreen(value) {
    if (screenValue === "0") {
        screenValue = value;
    } else {
        screenValue += value;
    }
    document.getElementById("result").innerText = screenValue;
}

function calculate() {
    let result = eval(screenValue);
    document.getElementById("result").innerText = result;
    screenValue = result;
}

function clearScreen() {
    screenValue = "0";
    document.getElementById("result").innerText = screenValue;
}
function index2gecis(){
    window.location.href ="index2.html";
}
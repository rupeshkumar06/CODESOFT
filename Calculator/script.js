// Append values to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete last entered character
function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

// Evaluate expression
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

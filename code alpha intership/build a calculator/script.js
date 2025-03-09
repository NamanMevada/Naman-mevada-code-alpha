let display = document.getElementById("display");  // Getting the display element

function appendCharacter(char) {
    display.value += char;  // Adds the clicked button to the display
}

function clearDisplay() {
    display.value = "";  // Clears the display
}

function calculateResult() {
    try {
        display.value = eval(display.value);  // Evaluates the math expression
    } catch {
        display.value = "Error";  // Handles invalid expressions
    }
}

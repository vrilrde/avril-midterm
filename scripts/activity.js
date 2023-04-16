const history = document.querySelector(".history");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const themeToggle = document.querySelector("#theme-toggle");
let operation = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        handleInput(value);
    });
});

function handleInput(value) {
    if (value === "C") {
        display.value = "";
        history.value = "";
        operation = "";
    } else if (value === "=") {
        const displayOperation = operation.replace(/÷/g, "/").replace(/×/g, "*");
        try {
            history.value = operation;
            display.value = eval(displayOperation);
            operation = display.value;
        } catch (error) {
            display.value = "Error";
            operation = "";
        }
    } else if (value === "Backspace") {
        operation = operation.slice(0, -1);
        display.value = operation;
    } else {
        operation += value;
        display.value = operation;
    }
}

themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
});

function keyboardInput(e) {
    const key = e.key;

    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(key)) {
        handleInput(key);
    } else if (key === "Enter" || key === "=") {
        handleInput("=");
    } else if (key === "Backspace") {
        handleInput("Backspace");
    } else if (key === "Escape" || key === "c" || key === "C") {
        handleInput("C");
    } else if (key === "+" || key === "-" || key === "÷" || key === "×") {
        handleInput(key);
    } else if (key === "*" || key === "/") {
        handleInput(key === "*" ? "×" : "÷");
    }
}

document.addEventListener("keydown", keyboardInput);

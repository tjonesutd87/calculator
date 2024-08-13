let num1 = 0;
let num2 = 0;
let op = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function operate(num1, num2, op) {
    op = op;
    let result = 0;
    if (op === "+") {
        result = add(num1, num2);
    } else if (op === "-") {
        result = subtract(num1, num2);
    } else if (op === "/") {
        result = divide(num1, num2);
    } else {
        result = multiply(num1, num2);
    }
    num1 = result;
}
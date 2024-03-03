"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondString = (0, readline_sync_1.question)("Enter second number:\n");
    var validInput = isOperator(operator) && isNumber(firstString) && isNumber(secondString);
    if (validInput) {
        var firstNumber = parseInt(firstString);
        var secondNumber = parseInt(secondString);
        var result = calculate(firstNumber, operator, secondNumber);
        console.log("\n".concat(firstString, " ").concat(operator, " ").concat(secondString, " = ").concat(result, "\n"));
    }
    else {
        console.log("\nInvalid input\n");
        main();
    }
}
function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
    }
}
function isOperator(operator) {
    return operator === "+" || operator === "-" || operator === "*" || operator === "/";
}
function isNumber(srt) {
    return !isNaN(Number(srt));
}
main();

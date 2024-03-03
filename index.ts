import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void
{
    const firstString: string = question("Enter first number:\n");
    const operator: string = question("Enter operator:\n");
    const secondString: string = question("Enter second number:\n");

    const validInput: boolean = isOperator(operator) && isNumber(firstString) && isNumber(secondString);

    if(validInput){
        const firstNumber: number = parseInt(firstString);
        const secondNumber: number = parseInt(secondString);
        const result: number = calculate(firstNumber, operator as Operator, secondNumber);
        console.log (`\n${firstString} ${operator} ${secondString} = ${result}\n`);
    }else{
        console.log("\nInvalid input\n");
        main();
    }
}

function calculate(firstNumber: number, operator: Operator, secondNumber: number): number
{
    switch(operator){
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

function isOperator(operator: string): boolean
{
    return operator === "+" || operator === "-" || operator === "*" || operator === "/";
}

function isNumber(srt: string): boolean
{
    return !isNaN(Number(srt));
}

main();

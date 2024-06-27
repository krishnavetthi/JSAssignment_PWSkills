/* 2. Calculator
Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbers.

The calculator function should
-> Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator.
-> Use a switch statement to determine which operation to perform based on the value of the operator.
-> If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a variable called result.
-> If the operator is not one of the valid operators, log "Invalid operator" to the console. 
*/

console.log("This is a calculator program!")
const prompt = require("prompt-sync")();
console.log("Calculator");
let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: "); 
let value1 = parseInt(num1);
let value2 = parseInt(num2);
let operator = prompt("Choose an operation, +,-,*,/,%: ");
let result;

switch(operator){
    case '+': result = value1+value2;
    console.log(`The sum of ${value1} and ${value2} is ${result}`); break;
    case '-': result = value1-value2;
    console.log(`The difference of ${value1} and ${value2} is ${result}`); break;
    case '*': result = value1*value2;
    console.log(`The product of ${value1} and ${value2} is ${result}`); break;
    case '/': result = value1/value2;
    console.log(`The quotient of ${value1} and ${value2} is ${result}`); break;
    case '%': result = value1%value2;
    console.log(`The remainder of ${value1} and ${value2} is ${result}`); break;
    default:console.log("Invalid operator");break;

}
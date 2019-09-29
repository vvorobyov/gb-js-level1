'use strict';
let a = promptNumber("Введите значение 1")
let b = promptNumber("Введите значение 2")
let oper = prompt("Введите операцию (+, -, *, /)")

switch (oper) {
    case "+":
        alert(`${a} ${oper} ${b} = ${addition(a, b)}`);
        break;
    case "-":
        alert(`${a} ${oper} ${b} = ${subtraction(a, b)}`);
        break;
    case "*":
        alert(`${a} ${oper} ${b} = ${multiply(a, b)}`);
        break;
    case "/":
        alert(`${a} ${oper} ${b} = ${division(a, b)}`);
        break;
    default:
        alert(`"${oper}" не является поддерживаемым типом операции`);
        break;
}
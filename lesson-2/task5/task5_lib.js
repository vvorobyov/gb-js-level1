'use strict';

/**
 * Функция выполнянет заданную операцию над адгументами 1 и 2
 *
 * @param {Number} arg1 - Аргумент 1
 * @param {Number} arg2 - Аргумент 2
 * @param {String} operation - Операция. Возможные значения "+", "-", "*", "/"
 * @throws {IsNotANumber} Вызывается если arg1 или arg2 не являются числами
 * @throws {IsNotValidOperationType} Вызывается если передан не поддерживаемый тип операции
 * @returns {Number}
 */
function mathOperation(arg1, arg2, operation){
    let result;
    switch (oper) {
        case "+":
            result = addition(a, b);
            break;
        case "-":
            result = subtraction(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = division(a, b);
            break;
        default:
            throw Error(`"${oper}" не является поддерживаемым типом операции`);
    }
    return result;
}


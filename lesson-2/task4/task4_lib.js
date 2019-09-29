'use strict';

/**
 * Проверяет является ли переданное значение числом, если нет пораждает исключение.
 * Значение NaN также пораждает исключение
 *
 * @param {*} value - Проверяемое значение
 * @throws `${value} is not Number` - Вызываемое исключение
 */
function checkNumber(value){
    if (typeof value != "number" || isNaN(value)){
        throw Error(`${value} is not Number`);
    }
}

/**
 * Округляет число до 2х знаков после запятой
 * 
 * @param {Number} num - Значение для округления
 * @returns {Number} - Округленное значение
 */
function round2(num){
    return + num.toFixed(2);
}

/**
 * Функция запрашивает у пользователя ввод  числа.
 * Если введенное пользователем значение не может быть преобразовано к числу, 
 * то запрос ввода повторяется.
 *
 * @param {String} [msg=""] - Выводимое пользователю сообщение
 * @returns {Number} - Число введенное пользователем
 */
function promptNumber(msg = ""){
    let result = parseFloat(prompt(msg));
    if (isNaN(result)){
        alert("Введенное значение не может быть преобразовано к целому числу. Повторите ввод.");
        result = promptNumber(msg);
    }
    return result;
}


/**
 * Возвращает сумму значений x и y
 *
 * @param {Number} x - Слагаемое 1
 * @param {Number} y - Слагаемое 2
 * @throws - Вызывает исключение если x или y не являются числами
 * @returns {Number} - Сумма
 */
function addition(x, y){
    checkNumber(x);
    checkNumber(y);
    return x+y;
}

/**
 * Возвращает разницу значений x и y
 *
 * @param {Number} x - Уменьшаемое
 * @param {Number} y - Вычитаемое
 * @throws - Вызывает исключение если x или y не являются числами
 * @returns {Number} - Разница
 */
function subtraction(x, y){
    checkNumber(x);
    checkNumber(y);
    return x-y;
}

/**
 * Возвращает произведение значений x и y
 *
 * @param {Number} x - Множитель 1
 * @param {Number} y - Множитель 2
 * @throws - Вызывает исключение если x или y не являются числами
 * @returns {Number} - Произведение
 */
function multiply(x, y) {
    checkNumber(x);
    checkNumber(y);
    return x*y;
}

/**
 * Возвращает результат деления x на y
 *
 * @param {Number} x - Делимое
 * @param {Number} y - Делитель
 * @throws - Вызывает исключение если x или y не являются числами
 * @returns {Number} - Частное
 */
function division(x, y){
    checkNumber(x);
    checkNumber(y);
    return round2(x/y);
}

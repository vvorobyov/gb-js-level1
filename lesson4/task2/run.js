'use strict';


/**
 * Функция запрашивает у пользователя ввод числа
 * И возвращает поразрядные значения в виде сообщения
 */
function num_to_digit() {
    let num = +prompt("Введите целое число в диапазоне от 0 до 999:");

    try {
        const digit = new DigitNumber(num);
        alert(`Введенное число состоит из ${digit.hundreds} сотен, ${digit.tens} десятков и ${digit.units}.`)
    } catch (error) {
        alert(error.message)
    }
}

num_to_digit()
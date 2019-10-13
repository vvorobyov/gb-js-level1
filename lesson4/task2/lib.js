'use strict';

/**
 * Конструктор класса преобразует число в объект содержащий разряды
 *
 * @param {Number} num - Целое число в диапазоне от 0 до 999
 */
function DigitNumber(num) {
    if (typeof num !== "number" || 
        !Number.isInteger(num) ||
        num < 0 || 
        num > 999) {
        throw Error("Требуется целое число в диапазоне от 0 до 999");
    }
    this.units = num % 10;
    this.tens = Math.floor(num /10) % 10;
    this.hundreds = Math.floor(num / 100) % 10;
}


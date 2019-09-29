'use strict';

/**
 * Проверяет является ли переданное значение положительным числом типа Integer, 
 * если нет пораждает исключение.
 * Значение NaN также пораждает исключение
 *
 * @param {*} value - Проверяемое значение
 * @throws `${value} is not Positive Integer` - Вызываемое исключение
 */
function checkPositiveInteger(value){
    if (typeof value != "number" || isNaN(value) || value < 0){
        throw Error(`${value} is not Positive Integer`);
    }
}

/**
 * Функция запрашивает у пользователя ввод целого положительного числа.
 * Если введенное пользователем значение не может быть преобразовано к целому положительному числу, 
 * то запрос ввода повторяется.
 *
 * @param {String} [msg=""] - Выводимое пользователю сообщение
 * @returns {Number} - Число введенное пользователем
 */
function promptPositiveInt(msg = ""){
    let result = parseInt(prompt(msg));
    if (isNaN(result) || result < 0){
        alert("Введенное значение не может быть преобразовано к целому положительному числу. Повторите ввод.");
        result = promptPositiveInt(msg);
    }
    return result;
}

/**
 * Функция возвращает слово рубль в склонении 
 * необходимом для сочетания с переданым числом. 
 * Слово возвращается в нижнем регистре.
 *
 * @param {Number} num - число для которого подбирается склонение слова рубль
 * @returns {String} - Возможные значения "рубль", "рубля" или "рублей"
 */
function getRubDeclension(num){
    checkPositiveInteger(num);
    let strNum = String(num);
    if (strNum.length == 1){
        strNum = "0"+strNum;
    }
    let lastNum = strNum[strNum.length-1];
    let penultNum = strNum[strNum.length-2];
    let result;
    switch (lastNum) {
        case "1":
            result = "рубль";            
            break;
        case "2":
        case "3":
        case "4":
            result = "рубля";
            break;
        default:
            result="рублей";
            break;
    }
    if (penultNum == "1") {
        result = "рублей";
    }
    return result;
}
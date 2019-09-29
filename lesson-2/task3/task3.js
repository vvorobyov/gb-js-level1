'use strict';
/**
 * Функция запрашивает у пользователя ввод целого числа.
 * Если введенное пользователем значение не может быть преобразовано к целому числу, 
 * то запрос ввода повторяется.
 *
 * @param {String} [msg=""] - Выводимое пользователю сообщение
 * @returns {Number} - Целое число введенное пользователем
 */
function promptInt(msg = ""){
    let result = parseInt(prompt(msg));
    if (isNaN(result)){
        alert("Введенное значение не может быть преобразовано к целому числу. Повторите ввод.");
        result = promptInt(msg);
    }
    return result;
}


let a = promptInt("Введите значение 'a'");    
let b = promptInt("Введите значение 'b'");    

let a_is_positive = a>=0;
let b_is_positive = b>=0;

if (a_is_positive && b_is_positive){
    alert("a - b = "+(a-b));
}else if (!a_is_positive && !b_is_positive) {
    alert("a * b = "+(a*b));
}else if (a_is_positive != b_is_positive) {
    alert("a + b = "+(a+b));
}

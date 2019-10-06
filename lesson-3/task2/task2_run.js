'use strict';

for(let num = 0; num <= 10; num++) {
    let result = '';
    if (!num) {
        result += num + ' - то ноль';
    } else if (num % 2 == 0){
        result += num + ' - это четное число';
    } else {
        result += num + ' - это нечетное число';
    }
    console.log(result)
}

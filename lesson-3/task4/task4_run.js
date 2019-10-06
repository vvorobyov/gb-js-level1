'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * Функция возвращает функцию для использования в итераторе,
 * которая осуществляет вычисление цены со скидкой для заданного продукта 
 * и выводит значение в консоль
 * @param {Number} [discount = 0] - размер скидки в процентах. Значение от 0..1
 * @throws - Не допустимое значение скидки
 * 
 * @returns {Function} - функция для итератора
 */
function getDiscount(discount=0) {
    let getPriceWithDiscount = function getPriceWithDiscount(product) {
        let price = product.price;
        product.price = price*(1-discount);
    }
    if (discount >=0 && discount <= 1){
        return getPriceWithDiscount;
    } else {
        throw Error('Не верное значение скидки');
    }
    
}

products.forEach(getDiscount(0.15))
console.log(products);

'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    }, {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


/**
 * Функция для фильтрации продуктов по наличию фотографий
 *
 * @param {Object} product
 * @returns {Boolean} - true - есть фото, false - нет фото
 */
function productsHasPhotosFilter(product) {
    let result = false;
    if (product.hasOwnProperty('photos') && 
        Array.isArray(product.photos) && 
        product.photos.length >0) {
            result = true;
    }
    return result;
}

/**
 * Функция для сравнения продуктов по цене
 *
 * @param {Object} product1
 * @param {Object} product2
 * @returns {Number} - 1 - product1 дороже product2; 0 - цены равны; -1 - prodict1 дешевле product2
 */
function productsPriceSort(product1, product2) {
    if (product1.price < product2.price) {
        return -1;
    } else if (product1.price > product2.price) {
        return 1;
    } else {
        return 0;
    }
}

let result = products.filter(productsHasPhotosFilter)
    .sort(productsPriceSort);
console.log(result);
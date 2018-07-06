'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let num = '';
    let result = {
        max: -10000000,
        min: 10000000
    };
    let index = 0;
    for (let char of str) {
        if ((char.charCodeAt(0) >= 45) && (char.charCodeAt(0) <= 57)){
            num += char;
            if((index + 1) === str.length){
                if (+num > result.max) result.max = +num;
                if (+num < result.min) result.min = +num;
            }
        } else {
            if (+num > result.max) result.max = +num;
            if (+num < result.min) result.min = +num;
            num = '';
        }
        index ++;
    }
    return result;
}


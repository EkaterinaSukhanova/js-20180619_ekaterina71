'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let num = '';
    let valueSet = false;
    let result = {
        min: 0,
        max: 0
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
            if (valueSet === false){
                result.max = num;
                result.min = num;
                valueSet = true;
            }
            if (+num > result.max) result.max = +num;
            if (+num < result.min) result.min = +num;
            num = '';
        }
        index ++;
    }
    result.max = +result.max;
    result.min = +result.min;

    return result;
}


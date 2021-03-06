'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
/** *имя не пустое, без пробелов, минимум 4 символа* **/
function isValid (name) {
    if (name === null || name === undefined) {
        return false;
    }

    return (name !== "") && (name.length >= 4) && (+(~name.indexOf(' ')) === 0);

}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();


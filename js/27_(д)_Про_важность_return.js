"use strict"

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion (result) {
//     console.log(result * discount);
// }

//можна передати як аргумент результат однієї функції в іншу
// promotion(convert(500, usdCurr));

//частіше записують через змінну
// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('done');
// }

// test();

// function doNothing() { };
// console.log(doNothing() === undefined);


//Після return НЕ ставити перенос строки, бо код не виконається!!!

//HOMEWORK
/*
1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.*/

// const userName = `Anton`

// function sayHello(user) {
//     return `Привет, ${user}!`;
// }
 
// console.log(sayHello(userName));

/*
2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив
 из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].*/

// function returnNeighboringNumbers(number) {
//     return arr = [number - 1, number, number+1];
// }
 
// console.log(returnNeighboringNumbers(5));
/*
3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, 
второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, 
разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)*/
 

function getMathResult(num, times) {

    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));




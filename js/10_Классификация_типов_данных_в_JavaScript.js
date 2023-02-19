"use strict"

//Типи данних JS:
//1. Прості типи:
// - числа 1,2,3
// - строки 'string', 'name'
// - логічний тип (boolean) - true/false
// - null - коли просто чогось не існує
// - undefined - коли щось існує, але значення ніякого в нього немає
// - Symbol -
// - BigInt - відображає великі числа, бо в JS можна використовувати число максимум 2 в 53 ступіні
//2. Об'єкти:
// а) спеціальні об'єкти:
// - масиви []
// - фунції function
// - Об'єкти, Дати
// - Регулярні вирази
// - Помилки
// б) прості об'єкти:

//ЧИСЛА
console.log(4/0) //при діленні на 0 в JS отримаємо Infinity
console.log('string' * 9); //дасть NaN - not a number

//СТРОКА
const persone = 'Alex';
const personeTwo = '5';
const personeThree = 'Hello world';

//BOOLEAN
const bool = true; //or false

//null or undefined
console.log(something); //Приклад помилки null - ReferenceError: something is not defined

let und;
console.log(und); //Приклад помилки undefined

//ОБ'ЄКТ

const obj = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(obj.name); //звернулись за допомогою крапки до значення властивості об'єкта - name
console.log(obj["name"]) //звернулись за допомогою [] до значення властивості об'єкта - name

//МАСИВ - використовується для зберігання данних, які йдуть строго по порядку, являється окремим випадком об'єкта

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[0]); //звертаємося до 1го значення масиву

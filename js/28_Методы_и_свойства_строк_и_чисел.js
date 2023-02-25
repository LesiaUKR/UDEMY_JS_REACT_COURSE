"use strict"

const str = "test";
const arr = [1, 2, 3];

console.log(str);

console.log(str.length); //length - это свойство, пишется через точку
console.log(str[2]);
console.log(str.toUpperCase());//повертає нове значення
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));//5 слово fruit починається з 5ї позиції в строкі "Some fruit"
console.log(fruit.indexOf("q"));//-1 значит такая буква не была найдена

//Всього в JS три методи взаємодії зі строками:

const logg = "Hello world";
console.log(logg.slice(6, 11)); //1й аргумент - з якої частини строки почати вирізання, другий - де закінчувати вирізання
console.log(logg.slice(6));//якщо залишити тільки 1й, то виріжеться до кінця
console.log(logg.slice(-5));//можуть бути від'ємні значення, що означає початок з права

console.log(logg.substring(6, 11)); //не підтримує від'ємні значення

console.log(logg.substr(6, 11));//1й аргумент - з якої частини строки почати вирізання, 2й - скільки знаків вирізати

//Методи взаємодії з числами:

const num = 12.2;
console.log(Math.round(num)); //округляє до найближчого цілого

const test = "12.2px";
console.log(parseInt(test)); //переводить число в іншу систему чисел одночасно переводить в тип даних число
console.log(parseFloat(test));//бере число або строку і повертає число в десятичному вираженні



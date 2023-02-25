"use strict";

//Operator precedence
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// 1_оператор "і" - &&

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('I am full')
// }

// console.log((hamburger && fries));

//завжди буде false - 0, ''(пустая строка), null, undefined, NaN

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries) //поверне 0, бо кола 0, а не 1* як в умові
//оператор && повертає перше ложне значення на якому логічний оператор зупинився
//якщо ж всі значення правдиві, то останнє значення поверне


// console.log(1 && 0); // 1-true, 0 - false, поверне 0
// console.log(1 && 5); // 1-true, 5 - true, поверне 5
// console.log(null && 5); // null-false, 5 - true, поверне null
// console.log(0 && 'gfhfhgf'); //0-false,  'gfhfhgf' - true, поверне 0

// if (hamburger === 3 && fries) {
//     console.log('All are full')
// } else {
//     console.log('We do not eat here, not enough food')
// }

// console.log((hamburger && fries));

// 2_оператор АБО ||
//Приклад 1
// const hamburger = 0;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('All are happy')
// } else {
//     console.log('We do not eat here, not enough food')
// }

// console.log(hamburger || cola || fries) //0
//Приклад 2
// let lohnReport, alexReport, samReport, mariaReport = 'done';
// console.log(lohnReport || alexReport || samReport || mariaReport) //done

//Приклад 3

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('All are happy')
// } else {
//     console.log('We do not eat here, not enough food')
// }

//Рішення:
//hamburger === 3 && cola === 2: поверне false, бо hamburger === 3 - true, cola === 2 - false
//fries === 3 && nuggets: поверне 2 кількість нагетсів, бо fries === 3 - true, nuggets - true
// false || true (2)- буде повідомлення 'All are happy', бо хоча б одна умова виконалась

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets) //поверне 2

//Оператор НЕ ! - повертає протилежне значення
console.log(!0) //true

//HOME WORK

console.log(NaN || 2 || undefined); //2

console.log(NaN && 2 && undefined); //NaN

console.log(1 && 2 && 3); //3

console.log(!1 && 2 && !3); //false

console.log(25 || null && !3); //25, бо оператор && має вищий пріоритет

console.log(NaN || null && !3 && undefined || 5); //5

console.log(NaN || null || !3 || undefined || 5); //5

console.log(5 === 5 && 3 > 1 || 5); //true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Done')
// } //виконається

// let hamburger; // поки не оголошено значення буде undefined
// const fries = NaN;
// const cola = 0;
// const nuggets = 2

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done')
// }  //виконається

let hamburger; // поки не оголошено значення буде undefined
const fries = NaN;
const cola = 0;
const nuggets = 2

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done')
} //не виконається
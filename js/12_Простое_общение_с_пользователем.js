"use strict"

//alert('Hello') - alert вбудований в браузер і зовнішній вигляд залежатиме від браузера

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам є 18?", "18") // "18" - placeholder - значення по замовчуванню; якщо перед prompt поставити +, то відповідь буде приходити в типі данних number
// console.log(typeof (answer)); //відповідь буде у типу даних - строка
//ВСЯ ІНФОРМАЦІЯ, ЯКА ПРИХОДИТЬ ВІД КОРИСТУВАЧА БУДЕ НАДХОДИТИ З ТИПОМ ДАННИХ - СТРОКА

const answers = [];
answers[0] = prompt('Як вас звати?', '');
answers[1] = prompt('Яке ваше прізвище?', '');
answers[2] = prompt('Скільки вам років?', '');

document.write(typeof(answers)); //object
document.write(typeof(null)); //object - визнана помилка в JS

"use strict"
let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
   
}

showFirstMessage("Hello World!")
console.log(num);

function calc(a, b) {
    return (a + b);
    // console.log('text'); якщо задати після return якийсь код, то він ніколи не виконається
}

console.log(calc(4, 3));
console.log(calc(7, 2));
console.log(calc(10, 5));


//FUNCTION DECLARATION - її можна визвати тільки до об'явлення
function ret() {
    let num = 50;
    return num; //повертає значення змінної у зовнішній код
}

const anotherNum = ret(); //значення змінної з функції
console.log(anotherNum);

//FUNCTION EXPRESSION - її можна визвати тільки після об'явлення, бо діє як змінна, тобто виконується тоді, коли до неї дійде код
const logger = function () {
    console.log("Hello");
};

//ARROW FUNCTION  - з'явилася в стандарті ES6 в 2015 р.
//

const calc = (a, b) => a + b; //якщо записана в одну строку, то фігурні дужки можна не ставити
//const calc = a => a + b; //якщо у функції один аргумент, то можна опустити круглі дужки
//якщо записати по класиці, то в середину фігурних дужок додаємо return
// якщо функція розростається, то записуємо так
//  const calc = (a, b) => {
//  console.log("1");
//  return a + b
// };




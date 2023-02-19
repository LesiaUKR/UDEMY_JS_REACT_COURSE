"use strict";

// if (4 == 4) {
//     console.log('Ok!')
// }

//завжди буде 'Ok!', бо 1 = true
if (1) {
    console.log('Ok!')
} else {
    console.log('Error!')
}

//вкладеність умов
const num = 50;

if (num < 49) {
   console.log('Error!')  
} else if (num > 100) {
     console.log('To much!')
} else {
      console.log('Ok!')
}

//тернарний оператор (бо три аргументи)= умова ? дія, якщо умова вірна : дія, якщо умова не виконується
(num === 50) ? console.log('Ok!') : console.log('Error!');

//switch - заміна розгалудження if else,
// 6але підходить тільки для строгого порівняння ===
//default - якщо жодна з умов не виконується можна задати умову по замовчуванню
//break - додаємо, щоб виконання скрипта перервалося в разі виконання умови,
//якщо не поставити, то скрипт буде виконуватись далі навіть якщо виконалась перша умова

switch (num) {
    case 49:
        console.log('Wrong!')
        break;
    case 100:
        console.log('Wrong!')
        break;
    case 50:
        console.log('Correct!')
        break;
    default:
        onsole.log('Not this time')
        break;
}

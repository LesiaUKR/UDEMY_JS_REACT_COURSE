"use strict"
/*Задачи:

1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
(тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. 
Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть
строку "При вычислении произошла ошибка"
НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут
ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

Примеры:
calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка' */

function calculateVolumeAndArea(length) {
  if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    } 
       let volume = 0;
        let area = 0;
        
       volume = length * length * length;
       area = 6 * (length * length);
       
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));
/*
2) Постепенно переходим к более реалистичным задачам :) 
Вы обнаружите, что там используется все тоже самое.
Напишите функцию, которая будет определять номер купе по переданному ей 
номеру места.
Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
Пример:
getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует"
getCoupeNumber(0)  => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.
*/

function getCoupeNumber(seat) {
    if (typeof (seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (seat === 0 || seat > 36) {
      return "Таких мест в вагоне не существует"
 } else {
     let coupe = 0;
    return coupe = (Math.ceil(seat/4));}
}

console.log(getCoupeNumber(5));


/*3) Создайте функцию, которая принимает в себя целое число минут и возвращает 
время в нужном формате строки. (Смотри пример). Обратите внимание на окончание 
слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит
не число, дробное или отрицательное число - функция возвращает строку 
"Ошибка, проверьте данные" Внимание! Давайте пока ограничимся максимум 600ю минутами
(10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час,
11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток
 (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
*/
//1й спосіб
function getTimeFromMinutes(minutes) {

    if (typeof (minutes) !== 'number'  || !Number.isInteger(minutes) || minutes < 0) {
        return "Ошибка, проверьте данные";
    } 
    const hours = Math.floor(minutes / 60);
    const leftMinutes = minutes % 60;
    const hoursStr = hours === 1 ? "час" : hours < 5 ? "часа" : "часов";
    const minsStr = leftMinutes === 1 ? "минута" : leftMinutes < 5 ? "минуты" : "минут";

   return `Это ${hours} ${hoursStr} и ${leftMinutes} ${minsStr}`; 
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(1268));
console.log(getTimeFromMinutes(60));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

//2й спосіб
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(1268));
console.log(getTimeFromMinutes(60));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

/*4) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. 
Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0
*/

function findMaxNumber(a, b, c, d) {
      if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}
/* 5) Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
 Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
 Причем, их количество должно быть равно переданному аргументу.
 Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:
fib(4) => ''0 1 1 2"
fib(7) => ''0 1 1 2 3 5 8"
fib('7') => ''"
fib(1) => "0"
fib(0) => ''"
Задача непростая для новичков, так что с первого раза может не получится.
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. 
То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
*/

function getFibonchiRow(num) {
 
    for (i = 0; i <= num; i++){
      return fib = `${i}, ${i + i}`;
    }
}

console.log(getFibonchiRow(4));

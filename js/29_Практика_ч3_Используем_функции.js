/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

*/

'use strict';

let numberOfFilms;
//isNaN() = проверяет аргумент, чтобы введенный аргумент был не числом. Возвращает правду, если введено не число
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    
};
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов', '');
    const b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else { 
        i--;
           console.log('error');
  }
}
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
   console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
console.log('Вы киноман');
} else {
   console.log('Произошла ошибка');
}
}

// detectPersonalLevel()

function showMyDB() {
    if (personalMovieDB.private != true) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
      for (let i = 1; i <= 3; i++){
       const favoriteGenre = +prompt(`Ваш любимый жанр под номером ${i}`);
          personalMovieDB.genres[i - 1] = favoriteGenre;
    }
}

writeYourGenres();
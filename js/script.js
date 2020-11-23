// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personaMoviaDB = {
    movies: {},
    actors: {},
    genres: [],
    privar: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personaMoviaDB.movies[a] = b;
// personaMoviaDB.movies[c] = d;

// console.log(personaMoviaDB);


const questions = ['Один из последних просмотренных фильмов?', 'На сколько оцените его?'];
let repeat = 2;

for (let i = 0; i < repeat; i++) {    
    personaMoviaDB.movies[prompt(questions[0], '')] = prompt(questions[1], '');    
}

console.log(personaMoviaDB);
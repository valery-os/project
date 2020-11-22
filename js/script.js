const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personaMoviaDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privar: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personaMoviaDB.movies[a] = b;
personaMoviaDB.movies[c] = d;

console.log(personaMoviaDB);
'use strick';



const personalMoviaDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMoviaDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMoviaDB.count == '' || isNaN(personalMoviaDB.count) || personalMoviaDB.count == null) {
            personalMoviaDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        const questions = ['Один из последних просмотренных фильмов?', 'На сколько оцените его?'];
        let repeat = 2;
        for (let i = 0; i < repeat; i++) {   
            let answer1 = prompt(questions[0], ''),
                answer2 = prompt(questions[1], '');
            if ( answer1 != null && answer2 != null && answer1 != '' && answer2 != '' &&  answer1.length < 50) {
                personalMoviaDB.movies[answer1] = answer2;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMoviaDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMoviaDB.count <= 30 && personalMoviaDB.count >= 10) {
            alert('Вы классический зритель');
        }else if (personalMoviaDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMoviaDB);
        }
    },
    toggleVisibleMyDB: function(privat) {
        if (personalMoviaDB.privat) {
            personalMoviaDB.privat = false;
        } else {
            personalMoviaDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3;  i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
                // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            } else {
                personalMoviaDB.genres[i - 1] = genre;
            }
            
        }  
        personalMoviaDB.genres.forEach((value, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${value}`);
        });
    },
    
};

// personalMoviaDB.rememberMyFilms();
// personalMoviaDB.detectPersonalLevel();
// personalMoviaDB.writeYourGenres();
// personalMoviaDB.toggleVisibleMyDB(personalMoviaDB['privat']);
// personalMoviaDB.showMyDB(personalMoviaDB.privat);






// detectPersonalLevel();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personaMoviaDB);
//     }
// }

// showMyDB(personaMoviaDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3;  i++) {
//        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
//        personaMoviaDB.genres[i - 1] = genre;
//     }  
// }

// writeYourGenres();
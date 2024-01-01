/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...'
	]
};

//1
const promo = document.querySelector('.promo');
const promoAdv = promo.querySelector('.promo__adv');
debugger;
promoAdv.remove();

//2
const promoGenre = promo.querySelector('.promo__genre');
//promoGenre.replaceWith('драма'.toUpperCase());
promoGenre.textContent = 'ДРАМА';

//3
const promoBg = promo.querySelector('.promo__bg');
//promoBg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';
promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

//4, 5
// const watchedMovies = promo.querySelectorAll('.promo__interactive-item');
movieDB.movies.sort();
// for (let i = 0; i < 5; i++) {
// 	watchedMovies[i].textContent = `${i+1}. ${movieDB.movies[i].toUpperCase()}`;
// }

//4
const movieList = promo.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.forEach((movie, i) => {
	movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${movie}
        <div class="delete"></div>
    </li>
    `;
});


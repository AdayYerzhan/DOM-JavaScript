'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан Logan",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]'),
        btn = document.querySelector('button');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (addInput.value.length >= 21) {
            movieDB.movies.push(`${addInput.value.slice(0, 20)}...`);
        } else {
            if (addInput.value) {
                movieDB.movies.push(addInput.value);
            }
        }

        checkbox.checked ? console.log('Добавляем любимый фильм') : null;
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
        event.target.reset();
    });

    function deleteAdv(arr) {
        arr.forEach(item => {
            item.remove();
        });
    }

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url(./img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        films.sort();
        
        films.forEach((item, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                // delete movieDB.movies[i];
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});
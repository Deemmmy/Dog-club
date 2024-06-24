// активизация  кнопки навигации стриниц(изм бекграунда)
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.paginations__link');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем класс active со всех кнопок
            buttons.forEach(btn => btn.classList.remove('paginations__link--active'));
            // Добавляем класс active к нажатой кнопке
            this.classList.add('paginations__link--active');
        });
    });
});

// тоже активній стиль к нажатой кнопке сортировки и так же изменение значения кнопки візова меню сортировки при віборе способа, скрытие мобильного меню и темного фона
document.addEventListener('DOMContentLoaded', function() {
    const sortButtons = document.querySelectorAll('.sorting__button');

    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем класс active со всех кнопок
            sortButtons.forEach(btn => btn.classList.remove('sorting__button--active'));
            // Добавляем класс active к нажатой кнопке
            this.classList.add('sorting__button--active');
            // скрываем моб
            document.querySelector('.sorting').classList.remove('active'); 
            // убираем бэкдроп фон
            document.querySelector('.backdrop').classList.remove('backdrop');
            // меняем текст меню кнопки на выбраную кнопку сортировки
            const textOFbutton = this.innerHTML;
            sortMenu.innerHTML = `<svg
									width="16"
									height="18"
									viewBox="0 0 16 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM3.5 1L3.5 17L4.5 17L4.5 1L3.5 1Z"
										fill="#FF9F0E"
									/>
									<path
										d="M11.6464 17.3536C11.8417 17.5488 12.1583 17.5488 12.3536 17.3536L15.5355 14.1716C15.7308 13.9763 15.7308 13.6597 15.5355 13.4645C15.3403 13.2692 15.0237 13.2692 14.8284 13.4645L12 16.2929L9.17157 13.4645C8.97631 13.2692 8.65973 13.2692 8.46447 13.4645C8.2692 13.6597 8.2692 13.9763 8.46447 14.1716L11.6464 17.3536ZM11.5 1L11.5 17L12.5 17L12.5 1L11.5 1Z"
										fill="#FF9F0E"
									/>
								</svg>${textOFbutton}`;
           
        });
    });
});


// Получить список продуктов
const productList = document.getElementById('product-list');
//созд массив из карточки
const products = Array.from(productList.getElementsByClassName('nutrition-section__product-card'));

    
document.getElementById('sort-cheaper-first').addEventListener('click', function() {
    // Извлечь цену и сортировать
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.product-card__price').childNodes[0].nodeValue.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.product-card__price').childNodes[0].nodeValue.replace('$', ''));
        return priceA - priceB;
    });

    // Очистить текущий список и добавить отсортированные продукты
    productList.innerHTML = '';
    products.forEach(product => productList.appendChild(product));
    setTimeout(parallaxEffect, 100);
});
// const cheaperFisrt = function () {
    
// }

document.getElementById('sort-expensive-first').addEventListener('click', function() {
    // Извлечь цену и сортировать (по умолчанию от большей к меньшей)
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.product-card__price').childNodes[0].nodeValue.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.product-card__price').childNodes[0].nodeValue.replace('$', ''));
        return priceA - priceB;
    });

    // Очистить текущий список и добавить отсортированные продукты
    productList.innerHTML = '';
    products.reverse(); //отсортированніе по цене продукті в обратном порядке от большей
    products.forEach(product => productList.appendChild(product));
    setTimeout(parallaxEffect, 100);
});


document.getElementById('sort-by-name').addEventListener('click', function() {
    // Сортировать продукты по имени
    products.sort((a, b) => {
        const nameA = a.querySelector('.product-card__title').textContent.trim().toLowerCase();
        const nameB = b.querySelector('.product-card__title').textContent.trim().toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    // Очистить текущий список и добавить отсортированные продукты
    productList.innerHTML = '';
    products.forEach(product => productList.appendChild(product));
    setTimeout(parallaxEffect, 100);
});


// изменение кол-ва товаров в корзине на нажатие бай
document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.querySelectorAll('.button--buy');
    const cart = document.querySelector('.header__cart');
    let cartCounter = null;

    const updateCartCounter = function () {
        if (!cartCounter) {
            // Создать элемент счетчика, если его нет
            cartCounter = document.createElement('span');
            cartCounter.classList.add('header__cart-counter');
            cartCounter.innerHTML = '0';
            cart.appendChild(cartCounter);
        }

        // Обновить значение счетчика
        let count = parseInt(cartCounter.innerHTML);
        count++;
        cartCounter.innerHTML = count;
    };

    buyBtn.forEach(button => {
        button.addEventListener("click", updateCartCounter);
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.nutrition-section__product-card');
    
//     function parallaxEffect() {
//       cards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         const offset = window.pageYOffset || document.documentElement.scrollTop;
//         const scrollPosition = rect.top + offset;
//         const windowCenter = (window.innerHeight / 2) + offset;
//         const translateY = (windowCenter - scrollPosition) * 0.1;

//         card.style.transform = `translateY(${translateY}px)`;
//       });
//     }

//     window.addEventListener('scroll', parallaxEffect);
//     parallaxEffect(); // Initial call to position elements correctly on load
//   });


    const cards = document.querySelectorAll('.nutrition-section__product-card');
    
    function parallaxEffect() {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const offset = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPosition = rect.top + offset;
        const windowCenter = (window.innerHeight / 2) + offset;
        const translateY = (windowCenter - scrollPosition) * 0.1;

        card.style.transform = `translateY(${translateY}px)`;
      });
    }

    window.addEventListener('scroll', parallaxEffect);
    parallaxEffect(); // Initial call to position elements correctly on load




const sortMenu = document.querySelector('.sorting__menu');
const sorting = document.querySelector('.sorting');
const mainTag = document.querySelector('main');
sortMenu.addEventListener("click", function () {
    // sorting.classList.toggle('mobile-sorting');
    const backdrop = document.createElement('div');
    backdrop.classList.toggle('backdrop');
    mainTag.append(backdrop);
    sorting.classList.toggle('active');
    
});

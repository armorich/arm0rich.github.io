window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'), // Получаем класс меню
    menuItem = document.querySelectorAll('.menu_item'), // Получаем класс menuItem вместе со всеми его элементами
    hamburger = document.querySelector('.hamburger');   // Получаем класс hamburger 

    hamburger.addEventListener('click', () => { // Обработчик события на нажатие по гамбургеру
        hamburger.classList.toggle('hamburger_active'); // Добавление класса активности гамбургера, если значение flase
        menu.classList.toggle('menu_active'); // Добавленик класса активного меню, которое выплывает с боку
    });

    menuItem.forEach(item => { // Перебор пслевдо массива элементов меню
        item.addEventListener('click', () => {  // Обработчик, при нажатии на элементы бокового меню
            hamburger.classList.toggle('hamburger_active'); // Гамбургер превращается в 3 полоски
            menu.classList.toggle('menu_active'); // Меню скрывается, потому что забираются классы активности
        });
    });
});
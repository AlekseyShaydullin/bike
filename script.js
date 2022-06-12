//DOM
const burger = document.querySelector('.header__burger');
const modalBurger = document.querySelector('.modal-burger');
const moadalNovigation = document.querySelector('#modal-navigation');
const modalSwitcher = document.querySelector('#modal-switcher')
const navigationVariety = document.querySelector('#navigation-variety');
const navigationChoiceBike = document.querySelector('#navigation-choice-bike');
const navigationWorkout = document.querySelector('#navigation-workout');
const switcherLight = document.querySelector('.footer-switcher__light');

//Бургер меню

//Открытие Бургер меню

function openCloseMenu() {
  burger.classList.toggle('header__burger_activ');
  modalBurger.classList.toggle('modal-burger_activ');
  moadalNovigation.classList.toggle('navigation_activ');
  modalSwitcher.classList.toggle('footer-switcher_active');
}

function burgerMenu() {
  burger.addEventListener('click', (evt) => openCloseMenu());
}

burgerMenu();

//Закрытие Бургер меню
navigationVariety.addEventListener('click', (evt) => openCloseMenu());

moadalNovigation.addEventListener('click', (evt) => openCloseMenu());

navigationVariety.addEventListener('click', (evt) => openCloseMenu());

//Темная тема сайта 

function darkTheme() {
  switcherLight.addEventListener('click', () => {
    switcherLight.classList.toggle('footer-switcher__light_dark');
  })
}

darkTheme();

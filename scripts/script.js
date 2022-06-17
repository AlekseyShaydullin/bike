//DOM
const burger = document.querySelector('.header__burger');
const modalBurger = document.querySelector('.modal-burger');
const moadalNovigation = document.querySelector('#modal-navigation');
const modalSwitcher = document.querySelector('#modal-switcher')
const navigationVariety = document.querySelector('#navigation-variety');
const navigationChoiceBike = document.querySelector('#navigation-choice-bike');
const navigationWorkout = document.querySelector('#navigation-workout');
const switcherList = document.querySelectorAll('.footer-switcher__light');
const page = document.querySelector('.page');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const navLinkList = document.querySelectorAll('.navigation__link');
const leadSubtitle = document.querySelector('.lead__subtitle');
const autorSubline = document.querySelector('.signature__quote-author-subline');
const varietySubtitle = document.querySelector('.variety__subtitle');
const rowButtonList = document.querySelectorAll('.row-buttons__button');
const arrowLeft = document.querySelector('.row-buttons__button_left');
const arrowRight = document.querySelector('.row-buttons__button_right');
const bikeMenuList = document.querySelectorAll('.choice-bike-menu__link');
const bikeSelect = document.querySelector('.choice-bike-select')
const bikeMenuActiv = document.querySelector('.choice-bike-menu__link_activ');
const workoutSubtitle = document.querySelector('.workout__subtitle');
const workoutLinkList = document.querySelectorAll('.workout-links__link');
const footer = document.querySelector('.footer');
const footerInput = document.querySelector('.footer__input');
const footerCopyright = document.querySelector('.footer__copyright');
const form = document.querySelector('.footer__form');
const input = document.querySelector('.footer__input');
const inputButton = document.querySelector('.footer__input-button');

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
  switcherList.forEach(switcher => switcher.addEventListener('click', function (evt) {
    switcher.classList.toggle('footer-switcher__light_dark');
    body.classList.toggle('body_dark')
    page.classList.toggle('page_dark');
    header.classList.toggle('header_dark');
    navLinkList.forEach(navLink => navLink.classList.toggle('navigation__link_dark'));
    leadSubtitle.classList.toggle('lead__subtitle_dark');
    autorSubline.classList.toggle('signature__quote-author-subline_dark');
    varietySubtitle.classList.toggle('variety__subtitle_dark');
    rowButtonList.forEach(rowButton => rowButton.classList.toggle('row-buttons__button_dark'));
    arrowLeft.classList.toggle('row-buttons__button_left-dark');
    arrowRight.classList.toggle('row-buttons__button_right-dark');
    bikeMenuList.forEach(bikeMenu => bikeMenu.classList.toggle('choice-bike-menu__link_dark'));
    bikeMenuActiv.classList.toggle('choice-bike-menu__link_activ-dark');
    bikeSelect.classList.toggle('choice-bike-select_dark');
    workoutSubtitle.classList.toggle('workout__subtitle_dark');
    workoutLinkList.forEach(workoutLink => workoutLink.classList.toggle('workout-links__link_dark'));
    footer.classList.toggle('footer_dark');
    footerInput.classList.toggle('footer__input_dark');
    inputButton.classList.toggle('footer__input-button_dark');
    footerCopyright.classList.toggle('footer__copyright_dark');
    modalBurger.classList.toggle('modal-burger_dark');
  }));
}

darkTheme();

//Форма подписки на рассылку

input.onfocus = () => {
  inputButton.classList.add('footer__input-button_active');
  input.placeholder = '';
}
input.onblur = () => {
  inputButton.classList.remove('footer__input-button_active');
  input.placeholder = 'Ваш e-mail';
}

form.onsubmit = (evt) => {
  evt.preventDefault();
  input.value = 'Круто!';
  input.setAttribute('disabled', 'disabled');
  input.style.cursor = 'auto';
  inputButton.classList.remove('footer__input-button_active');
}

inputButton.onmousedown = (evt) => {
  if (document.activeElement === input) {
    evt.preventDefault();
  }
}

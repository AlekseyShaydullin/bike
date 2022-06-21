//DOM
//Бургер меню
const burger = document.querySelector('.header__burger');
const modalBurger = document.querySelector('.modal-burger');
const moadalNovigation = document.querySelector('#modal-navigation');
const modalSwitcher = document.querySelector('#modal-switcher')
const navigationVariety = document.querySelector('#navigation-variety');
const navigationChoiceBike = document.querySelector('#navigation-choice-bike');
const navigationWorkout = document.querySelector('#navigation-workout');
const switcherList = document.querySelectorAll('.footer-switcher__light');
//Темная тема
const page = document.querySelector('.page');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const navLinkList = document.querySelectorAll('.navigation__link');
const leadSubtitle = document.querySelector('.lead__subtitle');
const autorSubline = document.querySelector('.signature__quote-author-subline');
const varietySubtitle = document.querySelector('.variety__subtitle'); //повтор
const rowButtonList = document.querySelectorAll('.row-buttons__button');
//Темная тема (стрелки слайдера Variety)
const arrowLeft = document.querySelector('.row-buttons__button_left');
const arrowRight = document.querySelector('.row-buttons__button_right');
//Темная тема
const bikeMenuList = document.querySelectorAll('.choice-bike-menu__link');
const bikeSelect = document.querySelector('.choice-bike-select')
const bikeMenuActiv = document.querySelector('.choice-bike-menu__link_activ');
const workoutSubtitle = document.querySelector('.workout__subtitle');
const workoutLinkList = document.querySelectorAll('.workout-links__link');
const footer = document.querySelector('.footer');
const footerCopyright = document.querySelector('.footer__copyright');
//Форма
const form = document.querySelector('.footer__form');
const input = document.querySelector('.footer__input');
const inputButton = document.querySelector('.footer__input-button');
//Слайдер Variety
const slideBox = document.querySelector('.row-photo__slide-photo');
const slideList = document.querySelectorAll('.row-photo__photo');
const slideCounter = slideList.length;
const slideIconList = document.querySelectorAll('.row-photo__icon');
const iconCounter = slideIconList.length;
const slideTitle = document.querySelector('.variety__title');
const slideSubtitle = document.querySelector('.variety__subtitle');


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
    input.classList.toggle('footer__input_dark');
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

//Слайдер Variety

function getWidth() {
  let width = document.querySelector('.row-photo__photo').offsetWidth;
  return width;
}

let activeIconIndex = 0;

function init() {
  slideList.forEach(photo => {
    photo.style.width = getWidth() + 'px';
    photo.style.height = 'auto';
  });
  slideIconList[activeIconIndex].style.left = 100 + 'px';
}

document.querySelector('.row-photo__photo').onload = () => {
  getWidth();
  init();
}

let count = 0;

arrowLeft.addEventListener('click', trafficLeft)
arrowRight.addEventListener('click', trafficRight)

function trafficLeft() {
  slideIcon('trafficLeft')
  let slideListSecond = document.querySelectorAll('.row-photo__photo');
  let slideBoxSecond = document.querySelector('.row-photo__slide-photo');

  /*slideListSecond.forEach(item => {
    item.style.left = item.offsetLeft - (getWidth() + 40) + 'px)';
  });*/

  let photo = slideListSecond[0].cloneNode(true);
  //photo.style.left = (slideListSecond.length - 1) * (getWidth() + 40) + 'px)';
  slideBoxSecond.append(photo);
  slideListSecond[0].remove();
}

function trafficRight() {
  slideIcon('trafficRight')
  let slideListSecond = document.querySelectorAll('.row-photo__photo');
  let slideBoxSecond = document.querySelector('.row-photo__slide-photo');

  /*slideListSecond.forEach(item => {
    item.style.transform = 'translate(-' + count * (getWidth() + 40) + 'px)';
  });*/

  let photo = slideListSecond[slideListSecond.length - 1].cloneNode(true);
  /*photo.style.transform = 'translate(-' + count * (getWidth() + 40) + 'px)';*/
  slideBoxSecond.insertBefore(photo, slideListSecond[0]);
  slideListSecond[slideListSecond.length - 1].remove();
}

function slideIcon(traffic) {
  slideIconList[activeIconIndex].style.left = -100 + 'px';
  if (traffic === 'trafficLeft') {
    activeIconIndex++;
    if (activeIconIndex === iconCounter) {
      activeIconIndex = 0;
    }
  } else if (traffic === 'trafficRight') {
    activeIconIndex--;
    if (activeIconIndex < 0) {
      activeIconIndex = iconCounter - 1;
    }
  }
  setTimeout(() => {
    slideIconList[activeIconIndex].style.left = 100 + 'px';
  }, 500)
}

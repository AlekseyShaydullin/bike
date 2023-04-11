//============================= DOM ==================================
//Бургер меню
const burger = document.querySelector('.header__burger');
const burgerButton = document.querySelector('.header__burger_activ')
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
const rowButtonList = document.querySelectorAll('.row-buttons__button');

//Темная тема (стрелки слайдера Variety)
const arrowLeft = document.querySelector('.row-buttons__button_left');
const arrowRight = document.querySelector('.row-buttons__button_right');

//Темная тема
const bikeMenuButtonList = document.querySelectorAll('.choice-bike-menu__button');
const bikeSelect = document.querySelector('.choice-bike-select')
const bikeMenuActiv = document.querySelector('.choice-bike-menu__button_activ');
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
const slideTitleList = document.querySelectorAll('.variety__title');
const slideSubtitleList = document.querySelectorAll('.variety__subtitle');
let activeIconIndex = 0;
let activeTextIndex = 0;

//Слайдер Bikes
const bikeCardsHighway = document.getElementById('highway');
const bikeCardsGravel = document.getElementById('gravel');
const bikeCardsTT = document.getElementById('TT');
const bikeOptionsList = document.querySelectorAll('.choice-bike-select__option')
const bikeDotsList = document.querySelectorAll('.choice-bike__dot');
const bikeCardList = document.querySelectorAll('.bike-card');

//============================= Бургер меню ==================================

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

//============================= Темная тема сайта ==================================

function darkTheme() {
  switcherList.forEach(switcher => switcher.addEventListener('click', function (evt) {
    switcher.classList.toggle('footer-switcher__light_dark');
    body.classList.toggle('body_dark');
    page.classList.toggle('page_dark');
    header.classList.toggle('header_dark');
    navLinkList.forEach(navLink => navLink.classList.toggle('navigation__link_dark'));
    leadSubtitle.classList.toggle('lead__subtitle_dark');
    autorSubline.classList.toggle('signature__quote-author-subline_dark');
    slideSubtitleList.forEach(slideSubtitle => slideSubtitle.classList.toggle('variety__subtitle_dark'))
    rowButtonList.forEach(rowButton => rowButton.classList.toggle('row-buttons__button_dark'));
    arrowLeft.classList.toggle('row-buttons__button_left-dark');
    arrowRight.classList.toggle('row-buttons__button_right-dark');
    bikeMenuButtonList.forEach(bikeMenu => bikeMenu.classList.toggle('choice-bike-menu__button_dark'));
    bikeMenuActiv.classList.toggle('choice-bike-menu__button_activ-dark');
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

//============================= Форма подписки на рассылку ==================================

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

//============================= Слайдер Variety ==================================

//Работа с картинками

function getWidth() {
  let width = document.querySelector('.row-photo__photo').offsetWidth; //  + 40
  return width;
}

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

arrowLeft.addEventListener('click', trafficLeft);
arrowRight.addEventListener('click', trafficRight);

function trafficLeft() {
  slideIcon('trafficLeft');
  slideText('trafficLeft');
  let slideListSecond = document.querySelectorAll('.row-photo__photo');
  let slideBoxSecond = document.querySelector('.row-photo__slide-photo');

  slideListSecond.forEach(photo => {
    photo.style.left = photo.offsetLeft - getWidth() + 'px';
  });

  let photo = slideListSecond[0].cloneNode(true);
  photo.style.left = (slideListSecond.length - 1) * getWidth() + 'px)';
  slideBoxSecond.append(photo);
  slideListSecond[0].remove();
}

function trafficRight() {
  slideIcon('trafficRight');
  slideText('trafficRight');
  let slideListSecond = document.querySelectorAll('.row-photo__photo');
  let slideBoxSecond = document.querySelector('.row-photo__slide-photo');

  let photo = slideListSecond[slideListSecond.length - 1].cloneNode(true);
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

//Работа с текстовым блоком слайдера Variety

function deleteClassActive() {
  slideTitleList.forEach(title => {
    title.classList.remove('variety__title_active');
  });

  slideSubtitleList.forEach(subtitle => {
    subtitle.classList.remove('variety__subtitle_active');
  });
}

function slideText(traffic) {
  deleteClassActive();
  if (traffic === 'trafficLeft') {
    activeTextIndex++;
    if (activeTextIndex === iconCounter) {
      activeTextIndex = 0;
    }
  } else if (traffic === 'trafficRight') {
    activeTextIndex--;
    if (activeTextIndex < 0) {
      activeTextIndex = iconCounter - 1;
    }
  }
  slideTitleList[activeTextIndex].classList.add('variety__title_active');
  slideSubtitleList[activeTextIndex].classList.add('variety__subtitle_active');
}

//============================= Слайдер Bikes ==================================



bikeMenuButtonList.forEach(btn => btn.addEventListener('click', (e) => choiceBikeType(e)));

bikeSelect.addEventListener('change', selectBikeType);

function choiceBikeType(e) {
  removeClass();
  if(bikeMenuButtonList[0] === e.target) {
    bikeCardsHighway.classList.toggle('bike-cards__view_activ');
  } else if(bikeMenuButtonList[1] === e.target) {
    bikeCardsGravel.classList.toggle('bike-cards__view_activ');
  } else if(bikeMenuButtonList[2] === e.target) {
    bikeCardsTT.classList.toggle('bike-cards__view_activ');
  }
  e.target.classList.toggle('choice-bike-menu__button_activ');
}

function selectBikeType() {
  removeClass();
  removeDotBikeCard();

  if(this.value === 'Шоссе') {
    bikeCardsHighway.classList.toggle('bike-cards__view_activ');
    bikeCardList[0].classList.add('bike-card_activ');
    bikeDotsList[0].classList.add('choice-bike__dot_active');
  } else if (this.value === 'Грэвел') {
    bikeCardsGravel.classList.toggle('bike-cards__view_activ');
    bikeCardList[3].classList.add('bike-card_activ');
    bikeDotsList[0].classList.add('choice-bike__dot_active');
  } else if (this.value === 'ТТ') {
    bikeCardsTT.classList.toggle('bike-cards__view_activ');
    bikeCardList[6].classList.add('bike-card_activ');
    bikeDotsList[0].classList.add('choice-bike__dot_active');
  }
}

bikeDotsList.forEach(dot => dot.addEventListener('click', slideBike))

function removeClass() {
  bikeCardsHighway.classList.remove('bike-cards__view_activ');
  bikeCardsGravel.classList.remove('bike-cards__view_activ');
  bikeCardsTT.classList.remove('bike-cards__view_activ');
  bikeMenuButtonList.forEach(btn => btn.classList.remove('choice-bike-menu__button_activ'));
}

// Dots Bikes

function slideBike() {
  removeClassBikeCard();
  removeDotBikeCard();
  this.classList.add('choice-bike__dot_active');

  if(bikeCardsHighway.classList.contains('bike-cards__view_activ')) {
    if(this.id === 'firstBike') {
      bikeCardList[0].classList.add('bike-card_activ');
    } else if (this.id === 'secondBike') {
      bikeCardList[1].classList.add('bike-card_activ');
    } else if (this.id === 'thirdBike') {
      bikeCardList[2].classList.add('bike-card_activ');
    }
  } else if (bikeCardsGravel.classList.contains('bike-cards__view_activ')) {
    if(this.id === 'firstBike') {
      bikeCardList[3].classList.add('bike-card_activ');
    } else if (this.id === 'secondBike') {
      bikeCardList[4].classList.add('bike-card_activ');
    } else if (this.id === 'thirdBike') {
      bikeCardList[5].classList.add('bike-card_activ');
    }
  } else if (bikeCardsTT.classList.contains('bike-cards__view_activ')) {
    if(this.id === 'firstBike') {
      bikeCardList[6].classList.add('bike-card_activ');
    } else if (this.id === 'secondBike') {
      bikeCardList[7].classList.add('bike-card_activ');
    } else if (this.id === 'thirdBike') {
      bikeCardList[8].classList.add('bike-card_activ');
    }
  }
}

function removeClassBikeCard() {
  bikeCardList.forEach(card => card.classList.remove('bike-card_activ'));
}

function removeDotBikeCard() {
  bikeDotsList.forEach(dot => dot.classList.remove('choice-bike__dot_active'));
}

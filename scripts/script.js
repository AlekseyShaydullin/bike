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

/*function getWidth() {
  let width = document.querySelector('.row-photo__photo').offsetWidth + 40;
  return width;
}

let activeIconIndex = 0;

function init() {
  let counter = 0;
  slideList.forEach(slide => {
    slide.style.left = counter * getWidth() + 'px';
    counter++;
  })
  slideIconList[activeIconIndex].style.left = 100 + 'px';
}

document.querySelector('.row-photo__photo').onload = () => {
  getWidth();
  init();
}

arrowLeft.addEventListener('click', nextPhoto);
arrowRight.addEventListener('click', nextPhoto);

function nextPhoto() {
  if (this.classList.contains('row-buttons__button_right')) {
    next();
  } else if (this.classList.contains('row-buttons__button_left')) {
    prev();
  }
}

function next() {
  arrowLeft.removeEventListener('click', nextPhoto);
  arrowRight.removeEventListener('click', nextPhoto);
  slideIcon('next');

  slideList.forEach(slide => {
    slide.style.left = slide.offsetLeft - getWidth() + 'px';
  });

  setTimeout(() => {
    let photo = slideList[0].cloneNode(true);

    photo.style.left = (slideCounter - 1) * getWidth() + 'px';
    slideBox.append(photo);
    slideList[0].remove();

    arrowLeft.addEventListener('click', nextPhoto);
    arrowRight.addEventListener('click', nextPhoto);
  }, 1000)
}

function prev() {
  arrowLeft.removeEventListener('click', nextPhoto);
  arrowRight.removeEventListener('click', nextPhoto);
  slideIcon('prev');

  let photo = slideList[slideCounter - 1].cloneNode(true);

  photo.style.left = -getWidth() + 'px';
  slideBox.insertBefore(photo, slideList[0]);
  slideList[slideCounter - 1].remove();
  const slideList = document.querySelectorAll('.row-photo__photo');

  slideList.forEach(slide => {
    slide.style.left = slide.offsetLeft + getWidth() + 'px';
  });

  setTimeout(() => {
    arrowLeft.addEventListener('click', nextPhoto);
    arrowRight.addEventListener('click', nextPhoto);
  }, 1000);
}

function slideIcon(direction) {
  slideIconList[activeIconIndex].style.left = -100 + 'px';
  if (direction === 'next') {
    activeIconIndex++;
    if (activeIconIndex === iconCounter) {
      activeIconIndex = 0;
    }
  } else if (direction === 'prev') {
    activeIconIndex--;
    if (activeIconIndex < 0) {
      activeIconIndex = iconCounter - 1;
    }
  }
  setTimeout(() => {
    slideIconList[activeIconIndex].style.left = 100 + 'px';
  }, 500);
}*/

//--------------------------------

/*let slide = [];

for (let i = 0; i < slideList.length; i++) {
  slide[i] = slideList[i].src;
  console.log(slide[i])
  slideList[i].remove();
  console.log(slide[i])
}*/

/*let stepPhoto = 0;
let offsetPhoto = 0;

function drawPhoto() {
  let img = document.createElement('img');
  img.src = slideList[stepPhoto].src;
  img.classList.add('row-photo__photo');
  img.style.left = offsetPhoto * 690 + 'px';
  document.querySelector('#slide-photo').appendChild(img);
  if (stepPhoto + 1 == slideList.length) {
    stepPhoto = 0;
  } else {
    stepPhoto++;
  }
  offsetPhoto = 1;
}
//console.log(drawPhoto());

arrowLeft.addEventListener('click', (evt) => {
  document.onclick = null;
  let slideVisibleList = document.querySelectorAll('.row-photo__photo');
  //console.log(slideVisibleList)
  let offsetPhotoVisible = 0;
  for (let i = 0; i < slideVisibleList.length; i++) {
    slideVisibleList[i].style.left = offsetPhotoVisible * 690 - 690 + 'px';
    offsetPhotoVisible++;
  }
  setTimeout(function () {
    slideVisibleList[0].remove();
    drawPhoto();
  });
});

/*arrowRight.addEventListener('click', (evt) => {
  document.onclick = null;
  let slideVisibleList = document.querySelectorAll('.row-photo__photo');
  let offsetPhotoVisible = 0;
  for (let i = 0; i < slideVisibleList.length; i++) {
    slideVisibleList[i].style.right = offsetPhotoVisible * 690 - 690 + 'px';
    offsetPhotoVisible++;
  }
  setTimeout(function () {
    slideVisibleList[0].remove();
    drawPhoto();
  }, 1000);
});*/


/*drawPhoto(); drawPhoto();

let slideIcon = [];

for (let i = 0; i < slideIconList.length; i++) {
  slideIcon[i] = slideIconList[i].src;
  slideIconList[i].remove();
}

let stepIcon = 0;
let offsetIcon = 0;

function drawIcon() {
  let img = document.createElement('img');
  img.src = slideIconList[stepIcon].src;
  img.classList.add('row-photo__icon');
  img.style.left = offsetIcon * 650 + 'px';
  document.querySelector('#slide-icon').appendChild(img);
}

drawIcon()*/

let count = 0;
let width;
let slideArr = Object.values(slideList);
let slideBoxArr = Object.values(slideBox);

console.log(slideArr);
console.log(slideBoxArr);

function init() {
  width = document.querySelector('.row-photo__photo').offsetWidth;
  slideBox.style.width = width * slideArr.length + 'px';
  slideArr.forEach(photo => {
    photo.style.width = width + 'px';
    photo.style.height = 'auto';
  });
  rollSlider()
}

window.addEventListener('resize', init);
init();



arrowLeft.addEventListener('click', () => {
  count++;
  if (count > 1) {
    let slide1 = slideArr.splice(0, 1);
    slideBoxArr.push(slide1[0]);
    console.log(slideArr);
  }
  rollSlider();
});

arrowRight.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = slideList.length - 1;
  }
  rollSlider()
});

function rollSlider() {
  slideArr.forEach(photo => {
    photo.style.transform = 'translate(-' + count * (width + 40) + 'px)';
  })
}
//DOM
const burger = document.querySelector('.navigation__list');

//Бургер меню
function burgerMenu() {
  burger.addEventListener('click', () => {
    burger.classList.toggle('navigation__list_activ')
  })
}
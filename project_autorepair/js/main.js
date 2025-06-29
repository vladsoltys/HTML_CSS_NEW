const menuBtn = document.querySelector('.header__top-burger');
const menu = document.querySelector('.header__top-menu');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('header__top-menu--open')
});
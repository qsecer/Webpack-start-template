const buttonBurger = document.querySelector('.button-burger');
const asideMenu = document.querySelector('.aside');
let activeFunc = function(){
    buttonBurger.classList.toggle("active")
    asideMenu.classList.toggle("active")
}
buttonBurger.addEventListener('click', activeFunc)
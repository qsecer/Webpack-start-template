const buttonBurger = document.querySelector('.button-burger');
const asideMenu = document.querySelector('.aside');
let activeFunc = function(){
    asideMenu.classList.toggle("active")
    console.log(11)
}
buttonBurger.addEventListener('click', activeFunc)
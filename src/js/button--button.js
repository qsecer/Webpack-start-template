//элементы бургер и боковое меню
const buttonBurger = document.querySelector('.button-burger');
const asideMenu = document.querySelector('.aside');


let body = document.querySelector('html');

let activeFunc = function(){
    buttonBurger.classList.toggle("active")
    asideMenu.classList.toggle("active")
    if (asideMenu.classList[1] === "active"){
        body.style.height = '100%';
        body.style.overflow = 'hidden'
    }
    if(asideMenu.classList[1] !== "active"){
        body.style.overflow = 'scroll'
    }
}
buttonBurger.addEventListener('click', activeFunc);

export {asideMenu}
export {buttonBurger}
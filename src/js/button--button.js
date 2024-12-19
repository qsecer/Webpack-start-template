const buttonBurger = document.querySelector('.button-burger');
const asideMenu = document.querySelector('.aside');
let dontScroll = document.body.style.position = '';
let body = document.querySelector('body')
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

// if (asideMenu.classList[1] === "active"){
//     dontScroll = document.body.style.position = 'fixed'
// }
// if(asideMenu.classList[1] !== "active"){
//     dontScroll = document.body.style.position = ''
// }
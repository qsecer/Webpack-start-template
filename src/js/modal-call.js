const buttonOpenCall = document.querySelector('.call');
const buttonHideCall = document.querySelector('.modal-call__btn')
const modalCallList = document.querySelector('.modal-call');
const buttonOpenCallHead = document.getElementsByClassName('header__img')[2];
import {asideMenu} from "./button--button";
import { buttonBurger } from "./button--button";

let body = document.querySelector('html')
//Функции открывающие модалку
buttonOpenCall.addEventListener('click', function(){
   asideMenu.classList.remove('active');
   buttonBurger.classList.remove('active');
   modalCallList.classList.add('active');
   body.style.height = '100%';
   body.style.overflow = 'hidden';
});
buttonOpenCallHead.addEventListener('click', function(){
   asideMenu.classList.remove('active');
   buttonBurger.classList.remove('active');
   modalCallList.classList.add('active');
   body.style.height = '100%';
   body.style.overflow = 'hidden';
});

//Функция закрывающ модалку
buttonHideCall.addEventListener('click', function(){
    modalCallList.classList.remove('active')
    body.style.overflow = 'scroll'
 });


 

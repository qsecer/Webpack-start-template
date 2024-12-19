const buttonOpenChat = document.querySelector('.chat');
const buttonHideChat = document.querySelector('.modal-feedback__btn');
const modalChatList = document.querySelector('.modal-feedback');
const buttonOpenChatHead = document.getElementsByClassName('header__img')[3];
let body = document.querySelector('html');
import {asideMenu} from "./button--button";
import { buttonBurger } from "./button--button";

//Функции открывающие модалку

buttonOpenChat.addEventListener('click', function(){
    asideMenu.classList.remove('active');
    buttonBurger.classList.remove('active');
    modalChatList.classList.add('active');
    modalChatList.classList.add('active');
    body.style.height = '100%';
    body.style.overflow = 'hidden';
});
buttonOpenChatHead.addEventListener('click', function(){
    asideMenu.classList.remove('active');
    buttonBurger.classList.remove('active');
    modalChatList.classList.add('active')
    modalChatList.classList.add('active')
    body.style.overflow = 'hidden';
});

//Функция закрывающая модалку

buttonHideChat.addEventListener('click', function(){
    modalChatList.classList.remove('active');
    body.style.overflow = 'scroll';
});

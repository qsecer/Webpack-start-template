const buttonOpenChat = document.querySelector('.chat');
const buttonHideChat = document.querySelector('.modal-feedback__btn')
const modalChatList = document.querySelector('.modal-feedback');
const buttonOpenChatHead = document.getElementsByClassName('header__img')[3];

buttonOpenChat.addEventListener('click', function(){
    modalChatList.classList.add('active')
});
buttonHideChat.addEventListener('click', function(){
    modalChatList.classList.remove('active')
});
buttonOpenChatHead.addEventListener('click', function(){
    modalChatList.classList.add('active')
});
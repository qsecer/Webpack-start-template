const buttonOpenCall = document.querySelector('.call');
const buttonHideCall = document.querySelector('.modal-call__btn')
const modalCallList = document.querySelector('.modal-call');
const buttonOpenCallHead = document.getElementsByClassName('header__img')[2];


buttonOpenCall.addEventListener('click', function(){
   modalCallList.classList.add('active') 
});
buttonHideCall.addEventListener('click', function(){
    modalCallList.classList.remove('active') 
 });
 buttonOpenCallHead.addEventListener('click', function(){
   modalCallList.classList.add('active')
 });
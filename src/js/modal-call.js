const buttonOpenCall = document.querySelector('.call');
const buttonHideCall = document.querySelector('.modal-call__btn')
const modalCallList = document.querySelector('.modal-call');

buttonOpenCall.addEventListener('click', function(){
   modalCallList.classList.add('active') 
});
buttonHideCall.addEventListener('click', function(){
    modalCallList.classList.remove('active') 
 })
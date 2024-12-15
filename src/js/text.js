const hiddenText =  document.querySelector('.parag--hidden-on-phone');
const mainButton = document.querySelector('.section__button')
const width = window.innerWidth
document.addEventListener('DOMContentLoaded', () => {
    if(width < 768){
        mainButton.addEventListener('click', ()=>{
            let classOfButton = mainButton.classList;
            if(classOfButton[1] === 'show-more'){
                hiddenText.style.display = 'block'
                hiddenText.classList.remove('show-more')
                hiddenText.classList.add('hide')
            }if(classOfButton[1] === 'hide'){
                hiddenText.style.display = 'none'
                hiddenText.classList.add('show-more')
                hiddenText.classList.remove('hide')

            }
        })
    }})
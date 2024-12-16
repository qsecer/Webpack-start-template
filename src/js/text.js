const hiddenText1 = document.querySelector('.parag--hidden-on-phone');
const hiddenText2 = document.querySelector('.parag--hidden-on-tablet');
const hiddenText3 = document.querySelector('.parag--hidden-on-PC');
const hiddenArr = [hiddenText1, hiddenText2, hiddenText3];
const mainButton = document.querySelector('.section__button');
const width = window.innerWidth;
mainButton.addEventListener('click', ()=>{
    if(width < 768){
        hiddenText1.classList.toggle("active");
        hiddenText2.classList.toggle("active");
        hiddenText3.classList.toggle("active");
    }
    if(width >= 768 && width <1440){
        hiddenText2.classList.toggle("active");
        hiddenText3.classList.toggle("active");
    }
    if(width >= 1440){
        hiddenText3.classList.toggle("active");
    }
})


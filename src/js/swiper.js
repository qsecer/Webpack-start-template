import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
let pagination  = document.querySelector('.swiper-pagination');



const button = document.querySelector(['.brand-table-button']);
const hiddenItems  = document.getElementsByClassName('brand-table-item');


document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 767){
        new Swiper('.swiper', {
            modules: [Pagination], 
            direction: 'horizontal',
            loop: true,


            pagination: {
                el: '.swiper-pagination',
                clickable: true},
            slidesPerView: 1.2,
            spaceBetween: 16,
        });


        }
    if(width >=768 && width < 1439){
        
        button.addEventListener('click', ()=>{
            let classOfButton = button.classList;
            if(classOfButton[1] === 'show-more'){
                for(let i = 6; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'flex';
                    button.classList.add('hide');
                    button.classList.remove('show-more');
                    button.textContent = 'Скрыть';
                }
            }else{
                for(let i = 6; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'none';
                    button.classList.add('show-more');
                    button.classList.remove('hide');
                    button.textContent = 'Показать больше';
                }
            }
        })
    }
    if(width >=1440){
        
        button.addEventListener('click', ()=>{
            let classOfButton = button.classList;
            if(classOfButton[1] === 'show-more'){
                for(let i = 8; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'flex';
                    button.classList.add('hide');
                    button.classList.remove('show-more');
                    button.textContent = 'Скрыть';
                }
            }else{
                for(let i =8; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'none';
                    button.classList.add('show-more');
                    button.classList.remove('hide');
                    button.textContent = 'Показать больше';
                }
            }
        })
    }
})




const viewBtn = document.querySelector('.view-table__button');
const hiddenItems = document.getElementsByClassName('view-table__item');
const width = window.innerWidth;

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    

    if(width >=768 && width < 1439){
        
        viewBtn.addEventListener('click', ()=>{
            let classOfButton = viewBtn.classList;
            if(classOfButton[1] === 'show-more'){
                for(let i = 6; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'flex';
                    viewBtn.classList.add('hide');
                    viewBtn.classList.remove('show-more');
                    viewBtn.textContent = 'Скрыть';
                }
            }else{
                for(let i = 6; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'none';
                    viewBtn.classList.add('show-more');
                    viewBtn.classList.remove('hide');
                    viewBtn.textContent = 'Показать больше';
                }
            }
        })
    }
    if(width >=1440){
        
        viewBtn.addEventListener('click', ()=>{
            let classOfButton = viewBtn.classList;
            if(classOfButton[1] === 'show-more'){
                for(let i = 8; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'flex';
                    viewBtn.classList.add('hide');
                    viewBtn.classList.remove('show-more');
                    viewBtn.textContent = 'Скрыть';
                }
            }else{
                for(let i =8; i < hiddenItems.length; i++){
                    hiddenItems[i].style.display = 'none';
                    viewBtn.classList.add('show-more');
                    viewBtn.classList.remove('hide');
                    viewBtn.textContent = 'Показать больше';
                }
            }
        })
    }
})
'use strict';

const item = document.querySelector('.main__list--item');

item.addEventListener('click', (e)=>{

    if(e.target.classList.contains('item')){
        e.target.classList.add('checked')
       }
    })

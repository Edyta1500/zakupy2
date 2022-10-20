'use strict';

const item = document.querySelector('.main__list--item');

item.addEventListener('click', (e)=>{

    if(!e.target.classList.contains('checked')){
      
        e.target.classList.add('checked')
     
    }
       
    else{
        
        e.target.classList.remove('checked')
      
    }
    
    });


    const list = document.querySelector('#product-list-in');
    const products = input.value;
   
    const tab = [];



let navMenu=document.querySelector('.nav__menu');
let navClose=document.querySelector('.nav__close');
let navModalContent=document.querySelector('.nav__modalContent');
let navList=document.querySelector('.nav__list');
    navMenu.addEventListener('click',()=>{
        navModalContent.classList.add('modal');
        navList.classList.add('showlist');
}) 
    navClose.addEventListener('click',()=>{
        navList.classList.remove('showlist');
        navModalContent.classList.remove('modal');
    })
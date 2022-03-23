
let navModalContent=document.querySelector('.nav__modalContent');
let navList=document.querySelector('.nav__list');
 export function showNav(){
    navModalContent.classList.add('modal');
    navList.classList.add('showlist');
}
   
export function hideNav(){
    navList.classList.remove('showlist');
    navModalContent.classList.remove('modal');
}
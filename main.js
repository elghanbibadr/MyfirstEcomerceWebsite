import {hideNav, showNav} from './nav';
// navigation
let navMenu=document.querySelector('.nav__menu');
let navClose=document.querySelector('.nav__close');

    navMenu.addEventListener('click',showNav);
   navClose.addEventListener('click',hideNav);
    // image slider
    let previous=document.querySelector('.previous');
    let next=document.querySelector('.next');
    let images=document.querySelectorAll('.product-images');
 console.log(images) 
 let count=0;
 next.addEventListener('click',()=>{
     if (count===images.length-1) count=0;
     else count++;
    images.forEach(img=>img.classList.add('hidden'));
  images[count].classList.remove('hidden');
  images[count].classList.add('visible');
 })
//  previous
 previous.addEventListener('click',()=>{
     if (count===0) count=images.length-1;
     else count--;
    images.forEach(img=>img.classList.add('hidden'));
  images[count].classList.remove('hidden');
  images[count].classList.add('visible');
 })
//  desktop gallery
const magicImage=document.querySelector('.magic');
// const magicBlock=document.querySelector('.img-block');
// magicBlock.addEventListener('click',()=>{
//     magicBlock.classList.toggle('modal2');
//     magicImage.style.marginTop='8rem'
// });
images.forEach(img=>{
     img.addEventListener('click',(e)=>magicImage.src=e.target.src);
   
})
// add quantity and to card
const plus=document.querySelector('.plus');
const minus=document.querySelector('.minus');
const quantity=document.querySelector('.quantity');
plus.addEventListener('click',()=>{
quantity.textContent++;
})
minus.addEventListener('click',()=>{
quantity.textContent--;
})
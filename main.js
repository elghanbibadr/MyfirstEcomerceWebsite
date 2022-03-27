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
// empty card
let cart=document.querySelector('.nav__cart');
let emptyCart=document.querySelector('.emptyCard');
cart.addEventListener('click',()=>{
  emptyCart.classList.toggle('showcard');
})

// add to card
const cardMessage=document.querySelector('.cardMessage');
const addToCardBtn=document.querySelector('.btns__addToCard');
const numberOfItems=document.querySelector('.NumberOfItems');
const checkOutBtn=document.querySelector('.btn-checkout');
addToCardBtn.addEventListener('click',()=>{
  if (quantity.textContent<=0){
    numberOfItems.style.display='none';
  }
  else {
    numberOfItems.classList.add('showNumberOfItems');
    numberOfItems.textContent=quantity.textContent;
  }
  
})
cart.addEventListener('click',()=>{
  if (numberOfItems.textContent>0){
   checkOutBtn.classList.add('showBtn');
  cardMessage.textContent=`Your Total is : 125$ x ${quantity.textContent} :${125*( parseInt(quantity.textContent))}$`
  }
})
checkOutBtn.addEventListener('click',()=>{
  emptyCart.classList.remove('showcard');
})
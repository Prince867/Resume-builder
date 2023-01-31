import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
      
const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,



// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
},
});
// drawer
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
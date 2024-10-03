let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');



 menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 };

 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active'); 
 }

$(document).ready(function(){
  
    
    $('.buttons').click(function(){

        $(this).addclass('active').siblings().removeclass('active');
          
        var filter = $(this).attr('data-filter')

        if(filter=='all'){
             $('.diet  .box').show(400);
        }

        else{
            $('.diet .box').not('.'+ filter).hide(200);
            $('.diet .box').filter('.'+ filter).show(400);
        }
    });
});
 
var swiper = new swiper('.review-slider', {
   loop:true,
   grabCursor:true,
   spaceBetween:20,
   breakpoints:{
    0:{
        slidesPerview: 1,
    },
    640:{
        slidesPerview: 2,

    },
    768:{
        slidesPerview: 3,
    },

   },

});
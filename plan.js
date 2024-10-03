var plan =document.querySelector('.plan');
var planbtn=document.querySelector('.plan-btn');
var closeBtn=document.querySelector('.close-btn');

planbtn.addEventListener("click",()=>{
       plan.classList.add('active');

})

closeBtn.addEventListener("click",()=>{
    plan.classList.remove('active');
})


//for imag slider

var i=0;
var image=[];
var time=3000;

image[0]="";
image[1]="";
image[2]="";
image[3]="";

function changing(){
    document.slide.src = images[i];

    if(i< images.length - 1){
        i++;
    }
    else{
        i=0 
}
     setTimeout("changimg()", time);
}

window.onload = changimg;
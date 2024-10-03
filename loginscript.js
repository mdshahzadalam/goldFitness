const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('sigInButton');
const signInform=documents.getElementById('signIn');
const signUpForm=document.getElementById('signup');


signUpButton.addEventListener('click',function(){
    signInform.style.display="none";
    signUpForm.style.display="block";

})
signInButton.addEventListener('click',function(){
    signInform.style.display="block";
    signUpform.style.display="none";
})

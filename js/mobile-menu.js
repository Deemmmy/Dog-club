const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.burger-btn');


const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    menuBtnOpen.classList.toggle('burger-btn__active')
};
menuBtnOpen.addEventListener('click', toggleMenu);
// menuBtnClose.addEventListener('click', toggleMenu);

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();


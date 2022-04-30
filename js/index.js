const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#responsive-menus');

hamburger.addEventListener('click' , () =>{ 
    menu.style.display ='block';
    menu.classList.toggle('hidden');
});
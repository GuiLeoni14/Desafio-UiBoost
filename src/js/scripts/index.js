AOS.init();
const header = document.querySelector('.js-header');

window.addEventListener('scroll', (() => {
    if (window.pageYOffset >= 80){
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }
}));
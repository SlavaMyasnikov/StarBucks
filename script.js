const scrollToTopBtn = document.querySelector('.btn__line');
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
scrollToTopBtn.addEventListener('click', scrollToTop)
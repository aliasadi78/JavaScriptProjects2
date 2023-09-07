const header = document.querySelector('.header')
console.log(header.getBoundingClientRect());
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.pageYOffset > header.getBoundingClientRect().height)
})
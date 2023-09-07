const header = document.querySelector('.header')
const header1 = document.querySelector('.header1')
window.addEventListener('scroll', () => {
    let h = header1.getBoundingClientRect().height + header.getBoundingClientRect().height
    header.classList.toggle('active', window.pageYOffset > h)
})
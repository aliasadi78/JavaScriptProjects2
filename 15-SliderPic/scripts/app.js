const container = document.querySelector('.container')
const slides = container.getElementsByTagName('img')
let i = 0;
toRight = () => {
    slides[i].classList.remove('active')
    i = ( i + 1 ) % slides.length
    slides[i].classList.add('active')
}

toLeft = () => {
    slides[i].classList.remove('active')
    i = ( i - 1 + slides.length) % slides.length
    slides[i].classList.add('active')
}

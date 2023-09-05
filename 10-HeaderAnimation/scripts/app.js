const header = document.querySelector('.header')
const p = document.querySelectorAll('p')

window.addEventListener('scroll', () => {
    header.style.opacity = 1 - (window.pageYOffset / 600)
})

p.forEach((item, index) => {
    if (index % 2 === 0) {
        item.style.color = '#52ab98'
    }
})
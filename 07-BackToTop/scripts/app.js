const btn = document.querySelector('.back')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 200) {
        btn.classList.add('active')
    } else {
        btn.classList.remove('active')
    }
})
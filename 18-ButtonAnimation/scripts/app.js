const buttons = document.querySelectorAll('a')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let span = document.createElement('span')
        span.style.left = x + "px"
        span.style.top = y + "px"
        btn.classList.forEach(element => {
            if (element === 'white') {
                span.style.background = '#000'
            }
        });
        btn.appendChild(span)
        setTimeout(() => {
            span.remove()
        }, 1000)
    })
})
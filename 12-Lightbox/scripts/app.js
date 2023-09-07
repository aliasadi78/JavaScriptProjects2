const imgBox = document.querySelectorAll('.img-box')


imgBox.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})
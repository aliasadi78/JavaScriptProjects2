const open = document.querySelector('.open')
const close = document.querySelector('.close')
const modal = document.querySelector('.modal-overlay')

open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})
const toggle = document.querySelector('.icon')
const sidebar = document.querySelector('.sidebar')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})
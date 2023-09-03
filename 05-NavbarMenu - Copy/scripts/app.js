const menu = document.querySelector('.full-page-menu')
const toggleBtn = document.querySelector('.toggle-btn')

let open = false
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    open = !open
    if (open) {
        toggleBtn.innerHTML = `<i style="color: crimson;" class="fa-solid fa-times"></i>`
    } else {
        toggleBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
})
const icon = document.querySelector('.icon')
const password = document.querySelector('.password')

showHide = () => {
    if (password.type === 'password') {
        password.setAttribute('type', 'text')
        icon.innerHTML = `<i class="fa fa-eye-slash"></i>`
        
    } else {
        password.setAttribute('type', 'password')
        icon.innerHTML = `<i class="fa fa-eye"></i>`
    }
}
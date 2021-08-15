const buttonMenu = document.querySelector('.button-mobile')
const menu = document.querySelector('.menu')

buttonMenu.addEventListener('click', event => {
    if (event.target.getAttribute('src') == './assets/images/icon-hamburger.svg')
        event.target.setAttribute('src', './assets/images/icon-close.svg')
    else
        event.target.setAttribute('src', './assets/images/icon-hamburger.svg')

    menu.classList.toggle('active')
})
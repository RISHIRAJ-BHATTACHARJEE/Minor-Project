// Script for opening of navigation bar on click
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

//Script for closing of nav bar on click
const close = document.querySelector('#close')

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}



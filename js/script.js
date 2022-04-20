$(document).ready(function () {
    $('#menuList').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar ul').toggleClass('show')
    })
})

let listBtn = Array.from(document.querySelectorAll('.menu ul li')),
    galary_box = [...document.querySelectorAll('.galary .box-container .box')],
    close = document.getElementById('close'),
    show_img = document.querySelector('.galary .overlay-box .show-img'),
    eye = document.getElementById('eye'),
    pass = document.querySelector('input[type="password"]'),
    up = document.querySelector('.up');

window.onscroll = function () {
    document.querySelector('#menuList').classList.remove('fa-times')
    document.querySelector('.navbar ul').classList.remove('show')
    if (this.scrollY > 600) {
        up.style.display = 'block'
    } else {
        up.style.display = 'none'
    }
}
listBtn.forEach((el) => {
    el.addEventListener('click', () => {
        listBtn.forEach((el) => {
            el.classList.remove('active')
        })
        el.classList.add('active')
        let src = el.dataset.src
        document.querySelector('.menu .row .image img').setAttribute('src', src)
    })
})

galary_box.forEach((el) => {
    el.addEventListener('click', function () {
        console.log(el.firstElementChild.getAttribute('src'))
        console.log(show_img.firstElementChild.getAttribute('src'))
        document.querySelector('.galary .overlay-box').style.top = '0'
        show_img.style.opacity = '1'
        show_img.firstElementChild.setAttribute('src', el.firstElementChild.getAttribute('src'))
    })
})
close.addEventListener('click', () => {
    document.querySelector('.galary .overlay-box').style.top = '-100%'
    show_img.style.opacity = '0'
})

eye.addEventListener('click', () => {
    eye.classList.toggle('fa-eye')
    eye.classList.toggle('fa-eye-slash')
    pass.getAttribute('type') == 'password' ? pass.setAttribute('type', 'text') : pass.setAttribute('type', 'password')
})

up.addEventListener('click',()=> {
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
})
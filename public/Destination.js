
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const menuBox = document.getElementById('menuBox');
const closeMenu = document.getElementById('closeMenu');

menu.addEventListener('click', function () {
    navbar.classList.toggle('menu-open');
    menuBox.classList.toggle('show');
});

closeMenu.addEventListener('click', function () {
    navbar.classList.remove('menu-open');
    menuBox.classList.remove('show');
});

 






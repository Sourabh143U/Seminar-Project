window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 100) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};

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

 






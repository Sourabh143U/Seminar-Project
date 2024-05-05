window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 100) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};
feather.replace();

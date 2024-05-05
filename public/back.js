// For the changing the color on the scroll down
console.log('aboutus');

window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};


// For the image slider


let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.getElementsByClassName("slider")[0].children;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// Script for typing effect
{
  var i = 0;
  var txt = 'Lorem ipsum dummy text blabla.';
  var speed = 50;
  
  function typewriter() {
    if (i < txt.length) {
      document.getElementById("Welcome-Heading").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typewriter, speed);
    }
  }
  
}
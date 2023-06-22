$(document).ready(function() {
  // Smooth scrolling
  $('a.nav-link').on('click', function(e) {
    const hash = this.hash;

    if (this.hostname !== window.location.hostname) {
      return;
    }

    e.preventDefault();

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500, 'swing', function() {
      window.location.hash = hash;
    });
  });

  // Highlight active nav-link
  $(window).on('scroll', function() {
    var fromTop = $(this).scrollTop() + 50;

    $('nav a.nav-link').each(function() {
      var section = $(this).attr('href');
      var offsetTop = $(section).offset().top;
      var outerHeight = $(section).outerHeight(true);

      if (fromTop >= offsetTop && fromTop < offsetTop + outerHeight) {
        $('nav a.nav-link').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });

  // Navbar toggle
  $('.navbar-toggler').on('click', function() {
    $('.navbar-collapse').toggleClass('show');
  });

  // Fade in animation
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    gsap.to(element, { opacity: 1, duration: 1.5, delay: 0.5 });
  });
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

const galleries = document.querySelectorAll(".gallery");

galleries.forEach((gallery) => {
  const images = gallery.querySelectorAll(".gallery-images img");

  images.forEach((img, index) => {
    img.style.transition = "all 0.5s ease";
    img.style.transform = `translateX(${index * 100}%)`;
  });

  gallery.addEventListener("mouseenter", () => {
    images.forEach((img, index) => {
      setTimeout(() => {
        img.style.transform = "translateX(0)";
      }, index * 100);
    });
  });

  gallery.addEventListener("mouseleave", () => {
    images.forEach((img, index) => {
      setTimeout(() => {
        img.style.transform = `translateX(${index * 100}%)`;
      }, index * 100);
    });
  });
});

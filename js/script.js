/*==================== TOGGLE ICON NAVBAR ====================*/

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('loaded');
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}; 

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; 

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    /*==================== STICK NAVBAR ====================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    /*==================== REMOVE TOGGLE NAVBAR ====================*/

    // menuIcon.classList.toggle('bx-x')
    // navbar.classList.toggle('active')
};

/*==================== SCROLL REVEAL ====================*/

ScrollReveal ({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .skills', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .see-more-container, .contact', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*==================== TYPED JS ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Content Writer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== CLEAR FORM ====================*/

function clearForm() {
  document.querySelector("form").reset();
}

/*==================== SKILLS ====================*/

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.toggle-btn');
  const skillsBox = document.querySelector('.skills-box');
  const skillsList = document.querySelector('.skills-list');
  const toolsList = document.querySelector('.tools-list');

  buttons.forEach(button => {
      button.classList.remove('active');
  });
  buttons[0].classList.add('active'); 
  skillsBox.classList.add('active');
  skillsList.style.display = 'flex';
  toolsList.style.display = 'none';

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const target = button.getAttribute('data-toggle-btn');
          
          buttons.forEach(btn => btn.classList.remove('active'));
          skillsBox.classList.remove('active');
          
          button.classList.add('active');
          
          if (target === 'skills') {
              skillsBox.classList.add('active');
              skillsList.style.display = 'flex';
              toolsList.style.display = 'none';
          } else if (target === 'tools') {
              skillsBox.classList.add('active');
              toolsList.style.display = 'flex';
              skillsList.style.display = 'none';
          }
      });
  });
});

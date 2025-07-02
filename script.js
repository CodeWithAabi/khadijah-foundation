const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// New About Sections
ScrollReveal().reveal('#khadijah', { delay: 100, origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#rasheediya', { delay: 200, origin: 'right', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#ahsan', { delay: 300, origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#masjid', { delay: 400, origin: 'right', distance: '50px', duration: 1000 });



// Animate Donation, Contact, and FAQ sections (bottom to top)
ScrollReveal().reveal('.donation', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 100
});

ScrollReveal().reveal('.contact', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.faq-section', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 300
});

ScrollReveal().reveal('.monthly-cost-section', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 300
});


// Donation progress bar logic
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('donation-progress');
  const goal = 100000;
  const raised = 10000;
  const percentage = Math.min((raised / goal) * 100, 100);
  progressBar.style.width = percentage + '%';
  progressBar.textContent = Math.floor(percentage) + '%';
});



function setLanguage(lang) {
  document.querySelectorAll('.info-text').forEach(block => {
    const content = block.getAttribute(`data-${lang}`);
    if (content) block.querySelector('p').innerText = content;
  });
}
// default to English
setLanguage('en');

//   
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});


//   // JavaScript for click effect
const toggleBtn = document.getElementById("menu-toggle");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.add("clicked");
  setTimeout(() => {
    toggleBtn.classList.remove("clicked");
  }, 400);
});




const slides = document.querySelectorAll(".banner-slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

showSlide(current);

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// 



function adjustNavbar() {
  const topBar = document.querySelector('.top-bar');
  const navbar = document.querySelector('.navbar');
  if (topBar && navbar) {
    const height = topBar.offsetHeight;
    navbar.style.top = height + 'px';
  }
}



let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.top = "0px"; // Show at top
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    header.style.top = "-200px"; // Hide both topbar + navbar
  } else {
    // Scrolling up
    header.style.top = "0px"; // Show both
  }

  lastScroll = currentScroll;
});



// Adjust on load and resize
window.addEventListener('load', adjustNavbar);
window.addEventListener('resize', adjustNavbar);

// 




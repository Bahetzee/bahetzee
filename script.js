// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Grid Animation on Scroll
const gridItems = document.querySelectorAll('.grid-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.3 });

gridItems.forEach(item => observer.observe(item));

// Form Submission (Basic Example)
const form = document.querySelector('.inquiry-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a placeholder)');
    form.reset();
});
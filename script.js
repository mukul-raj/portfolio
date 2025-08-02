// ============================
// Mobile menu toggle
// ============================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ============================
// Smooth scroll
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        navLinks.classList.remove('active');
    });
});

// ============================
// Fade-in on scroll
// ============================
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});

// ============================
// Theme toggle
// ============================
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// ============================
// EmailJS Contact Form
// ============================
// Load EmailJS library (make sure the script tag is in HTML before script.js)
(function(){
    emailjs.init("ioA1fmCaC_pCWNfgi"); // Your Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const statusEl = document.getElementById("form-status");

    emailjs.sendForm("service_8t7mik8", "template_2rlf0uq", this)
        .then(function() {
            statusEl.textContent = "✅ Message sent successfully!";
            statusEl.className = "success";
            setTimeout(() => statusEl.textContent = "", 4000);
            document.getElementById("contact-form").reset();
        }, function(error) {
            statusEl.textContent = "❌ Failed to send message. Try again.";
            statusEl.className = "error";
            setTimeout(() => statusEl.textContent = "", 4000);
            console.error("Error:", error);
        });
});


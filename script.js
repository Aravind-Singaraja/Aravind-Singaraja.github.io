document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-links');
    const overlay = document.createElement('div');
    
    overlay.classList.add('menu-overlay');
    document.body.appendChild(overlay);

    // Toggle navigation menu when clicking the menu button
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Close menu when clicking the overlay or a menu link
    overlay.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // Function to handle fade-in and fade-out when scrolling
    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
                section.classList.add('visible'); // Fade in
            } else {
                section.classList.remove('visible'); // Fade out
            }
        });
    }

    // Run on scroll and when the page loads
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ensure sections are checked when the page loads

    // Navbar active link highlight
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const shopNowButton = document.querySelector('.hero button');
    shopNowButton.addEventListener('click', () => {
        window.open('https://www.google.com/maps?q=your+shop+location', '_blank');
    });

    /* Image Slideshow */
    const slides = document.querySelectorAll('.slideshow img');
    let index = 0;

    function showSlides() {
        slides.forEach(img => img.classList.remove('active'));
        slides[index].classList.add('active');

        index = (index + 1) % slides.length;
        setTimeout(showSlides, 3000);
    }

    showSlides();
});
 
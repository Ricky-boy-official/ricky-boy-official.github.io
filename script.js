// Intersection Observer for Apple-style scroll animations (Repeating)
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in when scrolling into view
                entry.target.classList.add('visible');
            } else {
                // Remove the class when it leaves the screen so it animates again next time!
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// iOS Menu Toggle Logic
const iosBtn = document.getElementById('ios-menu-btn');
const iosDropdown = document.getElementById('ios-dropdown');

// Toggle menu on click
iosBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the click from instantly closing it
    iosDropdown.classList.toggle('show');
});

// Close menu if user clicks anywhere else on the screen
document.addEventListener('click', (e) => {
    if (!iosDropdown.contains(e.target) && iosDropdown.classList.contains('show')) {
        iosDropdown.classList.remove('show');
    }
});

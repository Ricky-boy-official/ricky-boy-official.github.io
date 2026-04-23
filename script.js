// --- Scroll Animation Logic ---
// This makes your sections smoothly fade in when they appear on screen
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Allows the animation to repeat if you scroll back up
            entry.target.classList.remove('visible'); 
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});


// --- iOS Resume Menu Logic ---
// This handles the pop-up behavior of your 3-dot menu
const iosBtn = document.getElementById('ios-menu-btn');
const iosDropdown = document.getElementById('ios-dropdown');

if (iosBtn && iosDropdown) {
    // Toggle menu when clicking the dots
    iosBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Stops the click from instantly closing the menu
        iosDropdown.classList.toggle('show');
    });

    // Close the menu if the user taps anywhere else on the screen
    document.addEventListener('click', (e) => {
        if (!iosDropdown.contains(e.target) && iosDropdown.classList.contains('show')) {
            iosDropdown.classList.remove('show');
        }
    });
                              }

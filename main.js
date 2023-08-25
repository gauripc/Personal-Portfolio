var typed = new Typed('#element', {
    strings: ['Web Developer.'],
    typeSpeed: 50,
});

 // Smooth scroll to target section when clicking on a navigation link
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Smooth scroll to target section with a gap when clicking on a navigation link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Calculate the offset to consider the gap
        const offset = -90; // Adjust this value to set the desired gap

        // Calculate the final scrolling position
        const scrollPosition = targetSection.getBoundingClientRect().top + window.scrollY + offset;

        // Scroll to the target section
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});
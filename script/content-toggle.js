/**
 * @file content-toggle.js
 * @author Fatima El Hilali
 * @description Dit script beheert de functionaliteit en animaties voor het tonen en verbergen 
 * van extra content met een "Read More" en "Read Less" knop. Animaties worden uitgevoerd met GSAP.
 * @see https://greensock.com/docs/ - Officiële GSAP documentatie.
 * @see YouTube Course: "Introductory Animations with GSAP" by [Sheryians Coding School
 */


// Selecteer de elementen: READ MORE knop, extra content, blur-overlay, en Read Less link
const toggleButton = document.querySelector('.toggle-content-btn');
const extraContent = document.querySelector('.extra-content');
const blurOverlay = document.querySelector('.blur-overlay');
const readLessLink = document.querySelector('.read-less');

// Zorg ervoor dat de extra content, blur-overlay en Read Less link verborgen zijn bij het laden
extraContent.style.display = "none";
blurOverlay.style.display = "none";
readLessLink.style.display = "none";

/**
 * Event listener voor de READ MORE knop.
 * Toont de extra content en activeert animaties.
 */
toggleButton.addEventListener('click', function () {
    /**
     * Reset animatie-eigenschappen om conflicten te voorkomen bij herhaalde klikken.
     */
    gsap.set(extraContent, { clearProps: "all" });
    gsap.set(blurOverlay, { clearProps: "all" });
    gsap.set(toggleButton, { clearProps: "all" });
    gsap.set(readLessLink, { clearProps: "all" });

    // Toon en animeer de extra content
    extraContent.style.display = "block";
    gsap.fromTo(
        extraContent,
        {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotate: -10
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: 'expo.out'
        }
    );

    // Toon en animeer de blur-overlay
    blurOverlay.style.display = "block";
    gsap.fromTo(
        blurOverlay,
        { opacity: 0, scale: 0.8 },
        {
            opacity: 1,
            scale: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            duration: 1,
            ease: 'power3.out'
        }
    );

    // Verberg de READ MORE knop met een fade-out
    gsap.to(toggleButton, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        onComplete: () => {
            toggleButton.style.display = "none";
        }
    });

    // Toon en animeer de Read Less link
    readLessLink.style.display = "inline-block";
    gsap.fromTo(
        readLessLink,
        {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.75)'
        }
    );
});

/**
 * Event listener voor de READ LESS knop.
 * Verbergt de extra content en reset naar de oorspronkelijke staat.
 */
readLessLink.addEventListener('click', function (e) {
    e.preventDefault(); // Voorkom standaard linkgedrag

    // Reset animatie-eigenschappen
    gsap.set(extraContent, { clearProps: "all" });
    gsap.set(blurOverlay, { clearProps: "all" });
    gsap.set(toggleButton, { clearProps: "all" });
    gsap.set(readLessLink, { clearProps: "all" });

    // Verberg de extra content met een animatie
    gsap.to(extraContent, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.2,
        ease: 'power2.out',
        onComplete: () => {
            extraContent.style.display = "none";
        }
    });

    // Verberg de blur-overlay
    gsap.to(blurOverlay, {
        opacity: 0,
        scale: 0.5,
        duration: 1.2,
        ease: 'power4.inOut',
        onComplete: () => {
            blurOverlay.style.display = "none";
        }
    });

    // Toon de READ MORE knop opnieuw
    toggleButton.style.display = "block";
    gsap.fromTo(
        toggleButton,
        {
            opacity: 0,
            y: 1000,
            scale: 0.5,
            rotate: -180
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1.5,
            ease: 'power2.out'
        }
    );

    // Verberg de Read Less link
    gsap.to(readLessLink, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        onComplete: () => {
            readLessLink.style.display = "none";
        }
    });
});

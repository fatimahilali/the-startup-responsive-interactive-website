
/**
 * @file intro-animation.js
 * @author Fatima El Hilali
 * @see https://greensock.com/docs/ - Officiële documentatie van GSAP.
 * @see YouTube Course: "Introductory Animations with GSAP" by [Sheryians Coding School
]
 */


/**
 * Introductie animaties van de website, gemaakt met GSAP.
 * @see https://greensock.com/docs/
 */
const tl = gsap.timeline({
    /**
     * Aantal herhalingen van de animatie.
     * 0 betekent dat de animatie slechts één keer wordt afgespeeld.
     * @property {number} repeat
     */
    repeat: 0,
});

/**
 * Stel beginwaarden in voor verschillende elementen om ze onzichtbaar te maken
 * en in de juiste startpositie te plaatsen.
 */
tl.set("header .logo img", { 
    opacity: 0, 
    scale: 0.8 
}); // Logo begint kleiner en onzichtbaar
tl.set(".main-title", { 
    opacity: 0, 
    y: 30 
}); // Hoofdtekst begint lager en onzichtbaar
tl.set(".menu-button", { 
    opacity: 0, 
    y: 20 
}); // Menu-knop begint lager en onzichtbaar
tl.set(".toggle-content-btn", { opacity: 0, y: 0 }); // Toggle-knop is onzichtbaar
tl.set(".video-section", { opacity: 0, y: 0 }); // Video-sectie begint onzichtbaar
tl.set("#rain-container", { opacity: 0, y: 0 }); // Regen-container begint onzichtbaar

/**
 * Logo animatie: het logo wordt zichtbaar en vergroot.
 */
tl.to("header .logo img", {
    /**
     * Logo wordt zichtbaar, krijgt originele grootte en beweegt vloeiend.
     * @property {number} opacity - Zichtbaarheid van het element.
     * @property {number} scale - Schaal van het element (1 = 100%).
     * @property {number} delay - Wacht voordat de animatie start.
     * @property {number} duration - Duur van de animatie in seconden.
     * @property {string} ease - Type overgang voor vloeiende bewegingen.
     */
    opacity: 1,
    delay: 1,
    scale: 1,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.out'
});

/**
 * Menu-knop animatie: verschijnt na het logo.
 */
tl.to(".menu-button", {
    opacity: 1, // Wordt zichtbaar
    y: 0,       // Beweegt naar originele positie
    duration: 1,
    ease: 'power2.out',
}, "+=0.5"); // Wacht 0.5 seconden na de vorige animatie

/**
 * Hoofdtekst animatie: verschijnt na de menu-knop.
 */
tl.to(".main-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
}, "+=0.5");

/**
 * Video-sectie animatie: verschijnt na de hoofdtekst.
 */
tl.to(".video-section", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
}, "+=0.5");

/**
 * Toggle-content-knop animatie: verschijnt na de video-sectie.
 */
tl.to(".toggle-content-btn", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
}, "+=0.5");


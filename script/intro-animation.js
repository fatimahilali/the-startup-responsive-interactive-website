/**
 * @file intro-animation.js
 * @author Fatima El Hilali
 * @description GSAP-gebaseerde animaties voor de introductie van de website. 
 * Inclusief secties zoals header, video-sectie, forecast, nieuwsbrief en temperatuur.
 * @see https://greensock.com/docs/ - Officiële documentatie van GSAP.
 * @see YouTube Course: "Introductory Animations with GSAP" by [Sheryians Coding School]
 */

/**
 * Creëer een GSAP-tijdlijn voor alle intro-animaties op de website.
 * @type {gsap.core.Timeline}
 */
const tl = gsap.timeline({
    /**
     * Aantal herhalingen van de animatie.
     * @property {number} repeat - 0 betekent dat de animatie slechts één keer wordt afgespeeld.
     */
    repeat: 0,
});

// Beginwaarden instellen voor verschillende elementen
tl.set("header .logo img", { opacity: 0, scale: 0.8 });
tl.set(".main-title", { opacity: 0, y: 30 });
tl.set(".menu-button", { opacity: 0, y: 20 });
tl.set(".toggle-content-btn", { opacity: 0, y: 0 });
tl.set(".video-section", { opacity: 0, y: 0 });
tl.set("#rain-container", { opacity: 0, y: 0 });
tl.set(".forecast-section", { opacity: 0, y: 30 });
tl.set(".newsletter-section", { opacity: 0, y: 30 });
tl.set(".temperature-section", { opacity: 0, y: 30 });

// Animatie voor het logo
tl.to("header .logo img", {
    opacity: 1,
    delay: 0.5,
    scale: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
});

// Animatie voor de menuknop
tl.to(".menu-button", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
}, "+=0.3");

// Animatie voor de hoofdtekst
tl.to(".main-title", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
}, "+=0.3");

// Animatie voor de video-sectie
tl.to(".video-section", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
}, "+=0.3");

// Animatie voor de toggle-content knop
tl.to(".toggle-content-btn", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
}, "+=0.3");

// Animatie voor de weersvoorspelling sectie
tl.to(".forecast-section", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
}, "+=0.3");

// Animatie voor de nieuwsbrief sectie
tl.to(".newsletter-section", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
}, "+=0.3");

// Animatie voor de temperatuur sectie
tl.to(".temperature-section", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
}, "+=0.3");






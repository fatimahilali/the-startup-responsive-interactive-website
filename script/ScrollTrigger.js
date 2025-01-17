/**
 * @file rain-animation.js
 * @description
 * Animaties voor interactieve scroll-effecten op een webpagina met behulp van GSAP
 * en de ScrollTrigger-plugin. De achtergrondkleurwijziging is beperkt tot desktop.
 *
 * @requires gsap
 * @requires ScrollTrigger
 */

// Registreer de ScrollTrigger-plugin bij GSAP
gsap.registerPlugin(ScrollTrigger);

// Functie om achtergrondkleuranimaties te initialiseren op desktop
function initBackgroundColorAnimation() {
  // Controleer of de schermbreedte groter is dan of gelijk is aan 1024px (desktop)
  if (window.innerWidth >= 1024) {
    const specificColor = "#5115F7"; // Specifieke kleur voor de achtergrond
    const defaultColor = "#FFFFFF"; // Standaard achtergrondkleur

    // Wijzig de achtergrondkleur van de body op basis van scrollpositie
    ScrollTrigger.create({
      trigger: ".page-wrapper > *:first-child",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
      onEnter: () => {
        gsap.to("body", { backgroundColor: specificColor, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to("body", { backgroundColor: defaultColor, duration: 0.5 });
      },
    });
  }
}

// Functie om algemene animaties te initialiseren (voor alle schermformaten)
function initGeneralAnimations() {
  // Vergroot en roteert een container tijdens het scrollen
  gsap.to(".page-wrapper > *:first-child", {
    scale: 1.1,
    rotate: 5,
    scrollTrigger: {
      trigger: ".page-wrapper > *:first-child",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
    },
  });

  // Past een blur-effect toe op een container tijdens het scrollen
  gsap.to(".page-wrapper > *:first-child", {
    filter: "blur(8px)",
    scrollTrigger: {
      trigger: ".page-wrapper > *:first-child",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
    },
  });

  // Animeren van een video-sectie
  gsap.to(".video-section video", {
    scale: 0, // Video wordt volledig verkleind
    scrollTrigger: {
      trigger: ".video-section",
      start: "top bottom", // Start wanneer de sectie de onderkant van het scherm bereikt
      end: "bottom top", // Eindigt wanneer de sectie de bovenkant van het scherm bereikt
      scrub: true, // Synchroniseert animatie met scrollen
      ease: "power3.inOut", // Soepel in- en uitzoom-effect
    },
  });
}

// Initialiseer animaties bij het laden van de pagina
initBackgroundColorAnimation();
initGeneralAnimations();

// Controleer schermgrootte bij het wijzigen van de venstergrootte
window.addEventListener("resize", () => {
  initBackgroundColorAnimation(); // Heractiveer de achtergrondkleuranimaties bij resize
});

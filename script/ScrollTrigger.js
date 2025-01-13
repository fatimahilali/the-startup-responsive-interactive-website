/**
 * @file ScrollTrigger.js
 * @author Fatima El Hilali
 * @description Dit script beheert alle scroll-gebaseerde animaties op de website. 
 * Het maakt gebruik van GSAP en ScrollTrigger om dynamische en interactieve
 * effecten te implementeren.
 * @see https://greensock.com/docs/ - Officiële GSAP documentatie.
 */

gsap.registerPlugin(ScrollTrigger);

/**
 * Algemene sectie-animaties
 * Voegt fade-in en subtiele bewegingseffecten toe aan alle secties.
 */
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 30, // Subtiele beweging naar boven
    duration: 1, // Snellere animatie
    ease: "power2.out", // Professionele easing
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse", // Herhaal de animatie bij naar boven scrollen
    },
  });
});

/**
 * Specifieke animatie voor de Temperature-Box
 * Creëert een dynamische rotatie en schaalverandering voor de temperatuursectie.
 */
gsap.timeline({
  scrollTrigger: {
    trigger: ".temperature-section",
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none reverse",
  },
})
  .from(".temperature-box h1", {
    opacity: 0,
    scale: 0.95, // Lichte schaalverandering
    y: -10, // Lichte verticale beweging
    duration: 1,
    ease: "expo.out",
  })
  .from(
    ".temperature-box .primary-text",
    {
      opacity: 0,
      x: -30, // Klein x-effect
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.8" // Overlap met de vorige animatie
  )
  .from(
    ".temperature-box .secondary-text",
    {
      opacity: 0,
      x: 30, // Klein x-effect in de tegenovergestelde richting
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.6"
  );

/**
 * Specifieke animatie voor de forecast items
 * Items verschijnen afwisselend van links en rechts met subtiele bewegingen.
 */
gsap.utils.toArray(".forecast-item").forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 20, // Lichte beweging naar beneden
    x: index % 2 === 0 ? -20 : 20, // Afwisselende beweging
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top 90%", // Animatie begint eerder
      end: "top 75%",
      toggleActions: "play none none reverse", // Herhaalbaar bij scroll omhoog/omlaag
    },
  });
});

/**
 * Video-sectie animatie
 * Zorgt voor een subtiele zoom-out animatie van de video tijdens scrollen.
 */
gsap.to(".video-section video", {
  scale: 0.8, // Zoomt uit naar 80% van de originele grootte
  scrollTrigger: {
    trigger: ".video-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true, // Smooth animatie tijdens scrollen
    ease: "power1.inOut", // Zorgt voor vloeiende overgang
  },
});

/**
 * @file intro-animation.js
 * @author Fatima El Hilali
 * @description
 * GSAP-animaties voor de introductie van de website. Het script animeert verschillende secties, waaronder de header, video-sectie, weersvoorspelling,
 * nieuwsbrief en temperatuur. De animaties werken zowel voor mobiele als desktopversies.
 *
 * @requires gsap
 * @see https://greensock.com/docs/ - Officiële documentatie van GSAP.
 */

/**
 * @type {gsap.core.Timeline}
 * @description
 * Hoofd-GSAP-tijdlijn die de animaties uitvoert voor de introductie 
 * De animaties worden één keer afgespeeld (geen herhalingen).
 */
const tl = gsap.timeline({
  repeat: 0, // Animatie wordt één keer afgespeeld
});

// Beginwaarden instellen voor verschillende elementen
tl.set("header .logo img", { opacity: 0, y: -50, scale: 0.8 });
tl.set(".main-title", { opacity: 0, y: 30 });
tl.set(".menu-button", { opacity: 0, y: 20 });
tl.set(".video-section", { opacity: 0, y: 50 });
tl.set(".forecast-section", { opacity: 0, y: 30 });
tl.set(".newsletter-section", { opacity: 0, y: 30 });
tl.set(".temperature-section", { opacity: 0, y: 30 });
tl.set(".desktop-menu li", { opacity: 0, y: 20 });
tl.set(".contact-button", { opacity: 0, y: 20 });

/**
 * Animatie voor het logo: Het logo wordt zichtbaar met een bounce-effect.
 */
tl.to("header .logo img", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.6,
  ease: "bounce.out",
});

/**
 * Animatie voor de menuknop (mobiele versie).
 * De knop wordt soepel in beeld gebracht.
 */
tl.to(
  ".menu-button",
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  },
  "-=0.3" // Start de animatie iets eerder
);

/**
 * Animatie voor de hoofdtekst (titel).
 * De tekst glijdt naar binnen met een vloeiende overgang.
 */
tl.to(
  ".main-title",
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  },
  "+=0.3" // Start de animatie na een kleine vertraging
);

/**
 * Animatie voor de video-sectie.
 * De video wordt eerst vergroot en vervolgens teruggeschaald.
 */
tl.to(".video-section", {
  opacity: 1,
  y: 0,
  scale: 1.05,
  duration: 0.6,
  ease: "power2.out",
}).to(
  ".video-section",
  {
    scale: 1,
    duration: 0.3,
    ease: "power1.inOut",
  },
  "-=0.3" // Combineer met de vorige animatie
);

/**
 * Animatie voor de weersvoorspelling-sectie.
 * De sectie verschijnt met een vloeiende overgang.
 */
tl.to(
  ".forecast-section",
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  },
  "+=0.2" // Start na een korte vertraging
);

/**
 * Animatie voor de nieuwsbrief-sectie.
 */
tl.to(
  ".newsletter-section",
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  },
  "+=0.2"
);

/**
 * Animatie voor de temperatuur-sectie.
 */
tl.to(
  ".temperature-section",
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  },
  "+=0.2"
);

/**
 * @type {gsap.core.Timeline}
 * @description
 * Een aparte tijdlijn voor desktop-specifieke animaties. Deze tijdlijn coördineert de animaties
 * die alleen zichtbaar zijn in de desktopversie van de website.
 */
const desktopTimeline = gsap.timeline();

/**
 * Animatie voor het desktopversie-logo.
 * Het logo wordt zichtbaar met een bounce-effect.
 */
desktopTimeline.to(".header-desktop .logo img", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.6,
  ease: "bounce.out",
});

/**
 * Animatie voor de navigatie-items in de desktopversie.
 * De items verschijnen met een lichte schaal- en overgangseffect.
 */
desktopTimeline
  .to(".desktop-menu li", {
    opacity: 1,
    y: 0,
    scale: 1.1,
    duration: 0.4,
    stagger: 0.15, // Voegt een vertraging toe tussen de animaties van de items
    ease: "power2.out",
  })
  .to(
    ".desktop-menu li",
    {
      scale: 1,
      duration: 0.2,
      ease: "power2.inOut",
    },
    "-=0.2" // Combineer met de vorige animatie
  );

/**
 * Animatie voor de contactknop in de desktopversie.
 * De knop wordt zichtbaar en vergroot lichtjes.
 */
desktopTimeline
  .to(".contact-button", {
    opacity: 1,
    y: 0,
    scale: 1.1,
    duration: 0.4,
    ease: "power2.out",
  })
  .to(
    ".contact-button",
    {
      scale: 1,
      duration: 0.2,
      ease: "bounce.out",
    },
    "-=0.2" // Combineer met de vorige animatie
  );

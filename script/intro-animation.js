/**
 * @file intro-animation.js
 * @author Fatima El Hilali
 * @description
 * GSAP- animaties voor de introductie van de website.
 * Animeren van verschillende secties zoals header, video-sectie, weersvoorspelling,
 * nieuwsbrief, temperatuur en meer. De animaties werken zowel voor mobiele als desktopversies.
 *
 * @requires gsap
 * @see https://greensock.com/docs/ - Officiële documentatie van GSAP.
 */

/**
 * Creëer een GSAP-tijdlijn voor alle intro-animaties op de website.
 *
 * @type {gsap.core.Timeline}
 * @property {number} repeat - Het aantal keren dat de animatie wordt herhaald (0 = geen herhaling).
 */
const tl = gsap.timeline({
    repeat: 0, // Animatie wordt één keer afgespeeld
  });
  
  // Stel beginwaarden in voor verschillende elementen
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
   * Voeg animatie toe voor het logo.
   * Het logo komt in beeld met een bounce-effect.
   */
  tl.to("header .logo img", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: "bounce.out",
  });
  
  /**
   * Animeren van de menuknop (mobiele versie).
   */
  tl.to(".menu-button", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  }, "-=0.3");
  
  /**
   * Animeren van de hoofdtekst.
   */
  tl.to(".main-title", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  }, "+=0.3");
  
  /**
   * Voeg animaties toe voor de video-sectie.
   * De video wordt vergroot en vervolgens teruggeschaald.
   */
  tl.to(".video-section", {
    opacity: 1,
    y: 0,
    scale: 1.05,
    duration: 0.6,
    ease: "power2.out",
  }).to(".video-section", {
    scale: 1,
    duration: 0.3,
    ease: "power1.inOut",
  }, "-=0.3");
  
  /**
   * Animeren van de weersvoorspelling sectie.
   */
  tl.to(".forecast-section", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  }, "+=0.2");
  
  /**
   * Animeren van de nieuwsbrief sectie.
   */
  tl.to(".newsletter-section", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  }, "+=0.2");
  
  /**
   * Animeren van de temperatuur sectie.
   */
  tl.to(".temperature-section", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  }, "+=0.2");
  
  /**
   * Creëer een aparte tijdlijn voor desktop-specifieke animaties.
   *
   * @type {gsap.core.Timeline}
   */
  const desktopTimeline = gsap.timeline();
  
  /**
   * Animeren van het desktopversie-logo.
   */
  desktopTimeline.to(".header-desktop .logo img", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: "bounce.out",
  });
  
  /**
   * Animeren van navigatie-items in de desktopversie.
   * Items verschijnen met een licht schaal- en overgangseffect.
   */
  desktopTimeline.to(".desktop-menu li", {
    opacity: 1,
    y: 0,
    scale: 1.1,
    duration: 0.4,
    stagger: 0.15, // Voegt een vertraging tussen items toe
    ease: "power2.out",
  }).to(".desktop-menu li", {
    scale: 1,
    duration: 0.2,
    ease: "power2.inOut",
  }, "-=0.2");
  
  /**
   * Animeren van de contactknop in de desktop versie.
   */
  desktopTimeline.to(".contact-button", {
    opacity: 1,
    y: 0,
    scale: 1.1,
    duration: 0.4,
    ease: "power2.out",
  }).to(".contact-button", {
    scale: 1,
    duration: 0.2,
    ease: "bounce.out",
  }, "-=0.2");
  
/**
 * @author Fatima El Hilali
 * @file ScrollTrigger.js
 * @description Dit script bevat alle animaties voor verschillende secties van een webpagina, zoals achtergrondkleuren, algemene animaties, forecast-items, nieuwsbriefformulieren, temperatuursecties, en meer.
 * @requires gsap
 * @requires ScrollTrigger
 * @see https://greensock.com/docs/
 */

// Registreer de ScrollTrigger-plugin bij GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialiseer de achtergrondkleuranimatie (alleen desktop).
 * Deze functie verandert de achtergrondkleur van de pagina afhankelijk van de scrollpositie.
 * @function
 */
function initBackgroundColorAnimation() {
  if (window.innerWidth >= 1024) {
    const specificColor = "#5115F7";
    const defaultColor = "#FFFFFF";

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

/**
 * Algemene animaties voor de hoofdelementen op de pagina.
 * Bevat schalen, rotatie, en blur-effecten bij scrollen.
 * @function
 */
function initGeneralAnimations() {
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

  gsap.to(".page-wrapper > *:first-child", {
    filter: "blur(8px)",
    scrollTrigger: {
      trigger: ".page-wrapper > *:first-child",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
    },
  });

  const videoSection = document.querySelector(".video-section");
  if (videoSection) {
    gsap.fromTo(
      videoSection,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        scrollTrigger: {
          trigger: videoSection,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }
}

/**
 * Initialiseer animaties voor forecast-items.
 * Voegt scroll- en hover-effecten toe aan de elementen.
 * @function
 */
function initForecastAnimations() {
  // Scroll-animatie voor forecast-items
  gsap.fromTo(
    ".forecast-item",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".forecast-list",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  // Hover-effecten voor forecast-items
  document.querySelectorAll(".forecast-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        scale: 1,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });
}

/**
 * Initialiseer animaties voor de nieuwsbrief-sectie.
 * Voegt animaties toe aan de tekst, het formulier en hover-effecten voor invoervelden.
 * @function
 */
function initNewsletterAnimations() {
  // Animatie voor de nieuwsbrieftitel
  gsap.fromTo(
    ".newsletter-title",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".newsletter-section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  // Animatie voor het nieuwsbriefformulier
  gsap.fromTo(
    ".newsletter-form",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".newsletter-section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  // Hover-effecten voor invoervelden en knoppen
  const inputs = document.querySelectorAll(".newsletter-form input, .newsletter-form button");
  inputs.forEach((input) => {
    input.addEventListener("mouseenter", () => {
      gsap.to(input, {
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    input.addEventListener("mouseleave", () => {
      gsap.to(input, {
        scale: 1,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.in",
      });
    });
  });
}

/**
 * Initialiseer animaties voor de temperatuur-slider.
 * Bevat scroll- en hover-effecten voor temperatuur-elementen.
 * @function
 */
function initTemperatureAnimations() {
  // Fade-in animatie voor de temperatuurbox
  gsap.fromTo(
    ".temperature-box",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".temperature-section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  // Hover-effecten voor de temperatuur-slider
  const slider = document.querySelector("#slider");
  slider.addEventListener("mouseenter", () => {
    gsap.to(slider, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  slider.addEventListener("mouseleave", () => {
    gsap.to(slider, {
      scale: 1,
      duration: 0.3,
      ease: "power2.in",
    });
  });
}

/**
 * Initialiseer animaties voor de "Read More" en "Read Less" sectie.
 * Voegt functionaliteiten toe voor het tonen/verbergen van extra tekst.
 * @function
 */
function initReadMoreAnimations() {
  const readMoreBtn = document.querySelector("#readMoreBtn");
  const readLessLink = document.querySelector("#readLessLink");
  const paragraph2 = document.querySelector("#paragraph2");
  const blurOverlay = document.querySelector(".blur-overlay");

  // Toon verborgen tekst met animatie
  readMoreBtn.addEventListener("click", () => {
    gsap.fromTo(
      paragraph2,
      { opacity: 0, height: 0, display: "none" },
      {
        opacity: 1,
        height: "auto",
        display: "block",
        duration: 0.6,
        ease: "power3.out",
      }
    );
    gsap.to(blurOverlay, { opacity: 0.5, duration: 0.6, ease: "power3.out" });
    readMoreBtn.style.display = "none";
    readLessLink.classList.remove("hidden");
  });

  // Verberg extra tekst met animatie
  readLessLink.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(paragraph2, {
      opacity: 0,
      height: 0,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => {
        paragraph2.style.display = "none";
      },
    });
    gsap.to(blurOverlay, { opacity: 0, duration: 0.6, ease: "power3.in" });
    readMoreBtn.style.display = "block";
    readLessLink.classList.add("hidden");
  });
}

/**
 * Initialiseer alle animaties bij het laden van de pagina.
 * @function
 */
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundColorAnimation();
  initGeneralAnimations();
  initForecastAnimations();
  initNewsletterAnimations();
  initTemperatureAnimations();
  initReadMoreAnimations();
});

/**
 * Herinitialiseer achtergrondkleuranimaties bij venster-resize.
 * @event window.resize
 */
window.addEventListener("resize", () => {
  initBackgroundColorAnimation();
});

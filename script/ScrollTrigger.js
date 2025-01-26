/**
 * @author Fatima El Hilali
 * @file ScrollTrigger.js
 * @description
 * Dit script bevat alle animaties voor verschillende secties van een webpagina, zoals achtergrondkleuren,
 * forecast-items, nieuwsbriefformulieren, temperatuursecties, en meer. Het maakt gebruik van GSAP
 * en de ScrollTrigger-plugin voor scrollgebaseerde animaties.
 * 
 * @requires gsap
 * @requires ScrollTrigger
 * @see https://greensock.com/docs/
 */

// Registreer de ScrollTrigger-plugin bij GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialiseer de achtergrondkleuranimatie (alleen voor desktop).
 * @function initBackgroundColorAnimation
 * @description Verandert de achtergrondkleur van de pagina afhankelijk van de scrollpositie.
 */
function initBackgroundColorAnimation() {
  if (window.innerWidth >= 1024) { // Controleer of het scherm groot genoeg is (desktop)
    const specificColor = "#5115F7"; // Nieuwe achtergrondkleur
    const defaultColor = "#FFFFFF"; // Standaard achtergrondkleur

    ScrollTrigger.create({
      trigger: ".page-wrapper > *:first-child",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true, // Zorgt voor vloeiende overgangen
      onEnter: () => gsap.to("body", { backgroundColor: specificColor, duration: 0.5 }),
      onLeaveBack: () => gsap.to("body", { backgroundColor: defaultColor, duration: 0.5 }),
    });
  }

  // Voeg een animatie toe voor de video-sectie als deze aanwezig is
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
 * @function initForecastAnimations
 * @description Voegt animaties toe aan de items in de weersvoorspelling-sectie.
 */
function initForecastAnimations() {
  // Voegt een scroll-animatie toe aan de forecast-items
  gsap.fromTo(
    ".forecast-item",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2, // Vertraging tussen items
      scrollTrigger: {
        trigger: ".forecast-list",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    }
  );

  // Mouse-enter- en mouse-leave-animaties voor interactieve effecten
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
 * @function initNewsletterAnimations
 * @description Animeert de titel en het formulier van de nieuwsbrief-sectie.
 */
function initNewsletterAnimations() {
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

  // Mouse-enter- en mouse-leave-animaties voor formulierinvoer en knoppen
  document.querySelectorAll(".newsletter-form input, .newsletter-form button").forEach((input) => {
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
 * @function initTemperatureAnimations
 * @description Animeert de temperatuurdoos en slider met scroll- en hover-effecten.
 */
function initTemperatureAnimations() {
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

  const slider = document.querySelector(".slider");
  if (slider) {
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
}

/**
 * Initialiseer animaties voor de "Read More" en "Read Less" sectie.
 * @function initReadMoreAnimations
 * @description Zorgt ervoor dat extra tekst zichtbaar of verborgen kan worden gemaakt met een animatie.
 */
function initReadMoreAnimations() {
  const readMoreBtn = document.querySelector(".readMoreBtn");
  const readLessLink = document.querySelector(".readLessLink");
  const paragraph2 = document.querySelector(".paragraph2");
  const blurOverlay = document.querySelector(".blur-overlay");

  if (readMoreBtn && readLessLink && paragraph2) {
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
}

/**
 * Initialiseer alle animaties bij het laden van de pagina.
 */
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundColorAnimation();
  initForecastAnimations();
  initNewsletterAnimations();
  initTemperatureAnimations();
  initReadMoreAnimations();
});

/**
 * Herinitialiseer achtergrondkleuranimaties bij venster-resize.
 */
window.addEventListener("resize", () => {
  initBackgroundColorAnimation();
});

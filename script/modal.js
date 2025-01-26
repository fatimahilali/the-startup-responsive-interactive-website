/**
 * @file modal.js
 * @description
 * Beheert alle functionaliteiten en animaties voor de modal en de carrousel.
 * De modal toont activiteiten en biedt navigatie tussen meerdere afbeeldingen in een carrousel.
 * @requires gsap
 */

// Globale variabelen voor de carrousel

/**
 * @type {string[]} currentImages
 * @description Bevat de lijst van afbeeldingen die in de carrousel worden weergegeven.
 */
let currentImages = [];

/**
 * @type {number} currentImageIndex
 * @description Huidige index van de afbeelding die wordt weergegeven in de carrousel.
 */
let currentImageIndex = 0;

/**
 * Toont de modal met activiteiteninhoud.
 *
 * @param {string} suitableContent - HTML-string van activiteiten die geschikt zijn voor de temperatuur.
 * @param {string} unsuitableContent - HTML-string van activiteiten die ongeschikt zijn voor de temperatuur.
 * @description
 * Genereert en toont de modal met twee secties: "What you could do" en "What you cannot do".
 * Als er geen activiteiten zijn, toont het een standaardbericht.
 */
function displayActivitiesModal(suitableContent, unsuitableContent) {
  const modal = document.querySelector(".activity-modal");

  modal.innerHTML = `
    <button class="close-modal" onclick="closeModal()">×</button>
    <div class="modal-content">
      <h2>What you could do:</h2>
      <div>${suitableContent || "<p>No suitable activities found.</p>"}</div>
      <h2>What you cannot do:</h2>
      <div>${unsuitableContent || "<p>Everything is possible!</p>"}</div>
    </div>
  `;

  openModal();
}

/**
 * Opent de modal en toont de details van een specifieke activiteit.
 *
 * @param {Object|null} activity - De activiteit waarvan details worden weergegeven. Kan `null` zijn als de modal generiek wordt geopend.
 * @description
 * Als een activiteit wordt meegegeven, worden de bijbehorende afbeeldingen geladen in de carrousel.
 * De modal wordt zichtbaar gemaakt met GSAP-animaties.
 */
function openModal(activity = null) {
  const modal = document.querySelector(".activity-modal");
  const overlay = document.querySelector(".modal-overlay");

  if (activity) {
    currentImages = activity.images || [];
    currentImageIndex = 0;

    modal.innerHTML = `
      <button class="close-modal" onclick="closeModal()">×</button>
      <div class="modal-content">
        <h2>${activity.title}</h2>
        <img class="carousel-image" src="${currentImages[currentImageIndex]}" alt="${activity.title}">
        <p>${activity.description}</p>
        ${currentImages.length > 1 ? generateCarouselControls() : ""}
      </div>
    `;
  }

  overlay.style.display = "block";
  modal.style.display = "block";

  // Modal en overlay animatie
  gsap.timeline()
    .fromTo(
      overlay,
      {
        opacity: 0,
        backdropFilter: "blur(0px)",
      },
      {
        opacity: 1,
        backdropFilter: "blur(8px)",
        duration: 0.8,
        ease: "power3.out",
      }
    )
    .fromTo(
      modal,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotationX: -10,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "expo.out",
      },
      "-=0.5"
    );
}

/**
 * Genereert HTML voor de carrouselbediening.
 *
 * @returns {string} HTML-string voor de knoppen "previous" en "next".
 * @description
 * De bedieningsknoppen worden alleen weergegeven als er meer dan één afbeelding beschikbaar is.
 */
function generateCarouselControls() {
  return `
    <div class="carousel-controls">
      <button onclick="prevImage()">previous</button>
      <button onclick="nextImage()">next</button>
    </div>
  `;
}

/**
 * Sluit de modal met een animatie.
 *
 * @description
 * Verbergt de modal en de overlay met GSAP-animaties. Na de animatie worden de elementen verborgen via `display: none`.
 */
function closeModal() {
  const modal = document.querySelector(".activity-modal");
  const overlay = document.querySelector(".modal-overlay");

  gsap.timeline()
    .to(modal, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 0.8,
      ease: "back.in(1.7)",
    })
    .to(
      overlay,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .eventCallback("onComplete", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
}

/**
 * Toon de vorige afbeelding in de carrousel.
 *
 * @description
 * Als de gebruiker op de "previous"-knop klikt, wordt de vorige afbeelding getoond.
 * Als de huidige afbeelding de eerste is, wordt de laatste afbeelding getoond (circulair).
 */
function prevImage() {
  if (currentImages.length === 0) return;

  const image = document.querySelector(".carousel-image");

  gsap.to(image, {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
    duration: 0.5,
    onComplete: () => {
      currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
      image.src = currentImages[currentImageIndex];
      gsap.fromTo(
        image,
        {
          opacity: 0,
          y: -30,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        }
      );
    },
  });
}

/**
 * Toon de volgende afbeelding in de carrousel.
 *
 * @description
 * Als de gebruiker op de "next"-knop klikt, wordt de volgende afbeelding getoond.
 * Als de huidige afbeelding de laatste is, wordt de eerste afbeelding getoond (circulair).
 */
function nextImage() {
  if (currentImages.length === 0) return;

  const image = document.querySelector(".carousel-image");

  gsap.to(image, {
    opacity: 0,
    y: -30,
    filter: "blur(10px)",
    duration: 0.5,
    onComplete: () => {
      currentImageIndex = (currentImageIndex + 1) % currentImages.length;
      image.src = currentImages[currentImageIndex];
      gsap.fromTo(
        image,
        {
          opacity: 0,
          y: 30,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        }
      );
    },
  });
}

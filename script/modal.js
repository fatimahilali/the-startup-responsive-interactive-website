/**
 * @file modal.js
 * @description Beheert alle functionaliteiten en animaties voor de modal en de carrousel.
 * De modal toont activiteiten en biedt navigatie tussen meerdere afbeeldingen in een carrousel.
 * @requires gsap 
 * @see  https://www.w3schools.com/ @stackoverflow.com
 * 
 */

// Globale variabelen voor carrousel
let currentImages = []; // Bevat de afbeeldingen voor de huidige activiteit
let currentImageIndex = 0; // Huidige index van de afbeelding in de carrousel

/**
 * Toont de modal met activiteiteninhoud.
 * Deze functie genereert de modalstructuur en injecteert HTML met geschikte en ongeschikte activiteiten.
 * @param {string} suitableContent - HTML-string van activiteiten die geschikt zijn voor de temperatuur.
 * @param {string} unsuitableContent - HTML-string van activiteiten die ongeschikt zijn voor de temperatuur.
 */
function displayActivitiesModal(suitableContent, unsuitableContent) {
  const modal = document.getElementById("activity-modal");

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
 * Als er meerdere afbeeldingen zijn, kan de gebruiker door de carrousel navigeren.
 * @param {Object|null} activity - De activiteit waarvan details worden weergegeven. Kan null zijn als de modal generiek wordt geopend.
 */
function openModal(activity = null) {
  const modal = document.getElementById("activity-modal");
  const overlay = document.getElementById("modal-overlay");

  if (activity) {
    currentImages = activity.images || [];
    currentImageIndex = 0;

    modal.innerHTML = `
      <button class="close-modal" onclick="closeModal()">×</button>
      <div class="modal-content">
        <h2>${activity.title}</h2>
        <img id="carousel-image" class="carousel-image" src="${currentImages[currentImageIndex]}" alt="${activity.title}">
        <p>${activity.description}</p>
        ${currentImages.length > 1 ? generateCarouselControls() : ""}
      </div>
    `;
  }

  overlay.style.display = "block";
  modal.style.display = "block";

  // Modal en overlay animatie met GSAP
  gsap.timeline()
    .fromTo(
      overlay,
      { opacity: 0, backdropFilter: "blur(0px)" },
      { opacity: 1, backdropFilter: "blur(8px)", duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      modal,
      { opacity: 0, y: 100, scale: 0.8, rotationX: -10 },
      { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.2, ease: "expo.out" },
      "-=0.5"
    );
}

/**
 * Genereert HTML voor de carrouselbediening (vorige en volgende knoppen).
 * Alleen weergegeven als er meerdere afbeeldingen beschikbaar zijn.
 * @returns {string} HTML-string voor de carrouselbediening.
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
 * De modal en overlay worden verborgen na de animatie.
 */
function closeModal() {
  const modal = document.getElementById("activity-modal");
  const overlay = document.getElementById("modal-overlay");

  gsap.timeline()
    .to(modal, { opacity: 0, y: 30, scale: 0.8, duration: 0.8, ease: "back.in(1.7)" })
    .to(overlay, { opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.4")
    .eventCallback("onComplete", () => {
      modal.style.display = "none";
      overlay.style.display = "none";
    });
}

/**
 * Toon de vorige afbeelding in de carrousel.
 * Als de huidige afbeelding de eerste is, ga naar de laatste afbeelding.
 */
function prevImage() {
  if (currentImages.length === 0) return;

  const image = document.getElementById("carousel-image");

  gsap.to(image, { opacity: 0, y: 30, filter: "blur(10px)", duration: 0.5, onComplete: () => {
      currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
      image.src = currentImages[currentImageIndex];
      gsap.fromTo(image, { opacity: 0, y: -30, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 });
  }});
}

/**
 * Toon de volgende afbeelding in de carrousel.
 * Als de huidige afbeelding de laatste is, ga naar de eerste afbeelding.
 */
function nextImage() {
  if (currentImages.length === 0) return;

  const image = document.getElementById("carousel-image");

  gsap.to(image, { opacity: 0, y: -30, filter: "blur(10px)", duration: 0.5, onComplete: () => {
      currentImageIndex = (currentImageIndex + 1) % currentImages.length;
      image.src = currentImages[currentImageIndex];
      gsap.fromTo(image, { opacity: 0, y: 30, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 });
  }});
}

/**
 * @file rain-animation.js
 * @author Fatima El Hilali
 * @description
 * Dit script genereert een regenanimatie met behulp van GSAP.
 * Willekeurig gegenereerde regendruppels bewegen van boven naar beneden
 * met verschillende snelheden en vertragingen, en herhalen hun beweging eindeloos.
 * @see https://greensock.com/docs/ - Officiële documentatie van GSAP.
 */

// Aantal regendruppels die worden gegenereerd
const dropletQuantity = 50;

/**
 * Genereer regendruppels en voeg een animatie toe aan elke druppel.
 * Elke druppel krijgt een willekeurige horizontale positie, snelheid en vertraging.
 */
for (let i = 0; i < dropletQuantity; i++) {
  /**
   * Willekeurige waarden voor de regendruppels.
   * @constant {number} pos - Willekeurige horizontale positie als percentage van de breedte.
   * @constant {number} delay - Willekeurige vertraging voordat de animatie start.
   * @constant {number} speed - Willekeurige snelheid van de animatie (tussen 0.5 en 1 seconde).
   */
  const pos = Math.random() * 100; // Willekeurige horizontale positie
  const delay = Math.random(); // Willekeurige vertraging
  const speed = Math.random() * 0.5 + 0.5; // Willekeurige snelheid tussen 0.5s en 1s

  // Maak een nieuw div-element voor de regendruppel
  const droplet = document.createElement("div");
  droplet.className = "droplet"; // CSS-klasse voor styling
  droplet.style.left = pos + "%"; // Stel de horizontale positie van de druppel in

  // Voeg een GSAP-animatie toe aan de regendruppel
  gsap.to(droplet, {
    y: 500,          // De druppel beweegt 500px naar beneden
    duration: speed, // De duur van de animatie wordt bepaald door de willekeurige snelheid
    delay: delay,    // De animatie start na een willekeurige vertraging
    repeat: -1,      // De animatie wordt oneindig herhaald
    ease: "none",    // Geen easing, zodat de beweging constant blijft
  });

  // Voeg de druppel toe aan de container waarin de regen wordt weergegeven
  document.querySelector(".rain-container").appendChild(droplet);
}

/**
 * Optioneel: Maak de regencontainer zichtbaar met een fade-in animatie.
 * Dit kan worden gebruikt om de regen geleidelijk in beeld te brengen bij het laden.
 */
gsap.to(".rain-container", {
  opacity: 1,        // Zorg ervoor dat de container volledig zichtbaar wordt
  duration: 1,       // Duur van de fade-in effect in seconden
  ease: "power2.out" // Een soepele overgang met een lichte vertraging
});

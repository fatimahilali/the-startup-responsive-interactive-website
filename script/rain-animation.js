/**
 * @file rain-animation.js
 * @author Fatima El Hilali
 * @description Dit script genereert een regenanimatie met behulp van GSAP. 
 *              Druppels worden willekeurig geplaatst, hebben verschillende snelheden, 
 *              en herhalen hun beweging eindeloos.
 * @see https://greensock.com/docs/ - Officiële documentatie van GSAP.
 */

// Aantal regendruppels die worden gegenereerd
const dropletQuantity = 50;

/**
 * Genereer regendruppels en voeg animatie toe.
 */
for (let i = 0; i < dropletQuantity; i++) {
  /**
   * Willekeurige waarden voor elke regendruppel:
   * @property {number} pos - Willekeurige horizontale positie (percentage van breedte).
   * @property {number} delay - Willekeurige vertraging voor de animatie.
   * @property {number} speed - Willekeurige snelheid van de animatie.
   */
  const pos = Math.random() * 100; // Willekeurige horizontale positie
  const delay = Math.random(); // Willekeurige vertraging
  const speed = Math.random() * 0.5 + 0.5; // Willekeurige snelheid

  // Maak een nieuw div-element voor de druppel
  const droplet = document.createElement("div");
  droplet.className = "droplet";
  droplet.style.left = pos + "%"; // Stel de horizontale positie in

  // Voeg een GSAP-animatie toe aan de druppel
  gsap.to(droplet, {
    y: 500,          // Beweeg naar beneden (500px)
    duration: speed, // Duur gebaseerd op willekeurige snelheid
    delay: delay,    // Start na willekeurige vertraging
    repeat: -1,      // Herhaal de animatie oneindig
    ease: "none",    // Geen easing voor constante beweging
  });

  // Voeg de druppel toe aan de regencontainer
  document.getElementById("rain-container").appendChild(droplet);
}

/**
 * Maak de regencontainer zichtbaar met een fade-in animatie.
 * Optioneel, afhankelijk van de implementatie.
 */
gsap.to("#rain-container", {
    opacity: 1,        // Fade-in effect
    duration: 1,       // Duur van de fade-in
    ease: "power2.out" // Zorg voor een vloeiende overgang
});

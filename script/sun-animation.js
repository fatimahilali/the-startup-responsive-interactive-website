/**
 * @author Fatima El Hilali
 * @file sun-animation.js
 * @description Animeert willekeurige weersymbolen (zoals zonnen) die vallen en horizontaal bewegen op het scherm.
 * Deze animatie is ontworpen met GSAP om een dynamisch en aantrekkelijk effect te creëren.
 * @requires gsap
 * @see https://greensock.com/docs/  
 */

console.clear(); // Wis de console voor een schone weergave

// Globale variabelen
const rnd = gsap.utils.random; // Sneltoegang tot GSAP's random util
const target = document.querySelector(".target"); // Het container-element voor de animaties
const w = window.innerWidth; // Breedte van het scherm
const h = window.innerHeight; // Hoogte van het scherm
const weatherCount = 50; // Aantal weerobjecten dat wordt gegenereerd

gsap.set(target, { perspective: 900 }); // Stel perspectief in voor een 3D-effect

// Een lijst met de afbeeldingen in je 'assets'-map
const weatherImages = [
  "assets/sun1.png", // Afbeelding 1
  "assets/sun2.png", // Afbeelding 2
  // Voeg hier meer afbeeldingen toe (zoals regen, wolken, enz.)
];

/**
 * Genereert en animeert weersymbolen (zoals zonnen) binnen de container.
 * Het aantal symbolen wordt bepaald door `weatherCount`.
 */
for (let i = 0; i < weatherCount; i++) {
  const newDiv = document.createElement("div"); // Maak een nieuw element
  newDiv.className = "weather"; // Voeg een CSS-klasse toe voor styling
  target.appendChild(newDiv); // Voeg het nieuwe element toe aan de container

  // Kies een willekeurige afbeelding uit de lijst en stel deze in als achtergrond
  const image = rnd(weatherImages); // Kies een willekeurige afbeelding
  newDiv.style.backgroundImage = `url('${image}')`;

  // Startpositie van het object
  const startX = rnd(0, w); // Willekeurige horizontale positie
  const startY = h * 0.9 + rnd(0, 30); // Start net onder het midden van het scherm

  // Stel initiële eigenschappen van het object in
  gsap.set(newDiv, {
    x: startX, // Willekeurige horizontale positie
    y: startY, // Startpositie onder het midden
    z: rnd(-200, 200), // Willekeurige diepte (voor een 3D-effect)
    scale: rnd(0.75, 1), // Willekeurige schaalgrootte
    opacity: 0.4 // Begin met een lichte zichtbaarheid
  });

  // Activeer de animatie voor het weerobject
  fallingWeather(newDiv);
}

/**
 * Animeert een weersymbool (zoals zon, regen of wolken).
 * Het object valt naar beneden, beweegt licht horizontaal, roteert en herhaalt dit proces oneindig.
 * @param {HTMLElement} weather - Het HTML-element dat wordt geanimeerd.
 */
function fallingWeather(weather) {
  // Laat het object vallen en onzichtbaar worden
  gsap.to(weather, {
    duration: rnd(6, 12), // Willekeurige duur van de val
    y: h + 500, // Laat het object verder vallen onder de onderkant van het scherm
    opacity: 0, // Geleidelijk onzichtbaar maken
    ease: "none", // Geen easing voor constante snelheid
    repeat: -1, // Herhaal oneindig
    delay: rnd(0, 2) // Willekeurige vertraging om het effect dynamisch te maken
  });

  // Voeg lichte horizontale beweging toe (yoyo-effect)
  gsap.to(weather, {
    duration: rnd(2, 4), // Willekeurige duur van horizontale beweging
    x: "+=20", // Beweeg licht naar links en rechts
    repeat: -1, // Herhaal de beweging
    yoyo: true, // Keer terug naar de originele positie
    ease: "sine.inOut" // Zachte easing voor realistisch effect
  });

  // Voeg lichte rotatie toe (voor dynamisch effect)
  gsap.to(weather, {
    duration: rnd(1, 3), // Willekeurige duur van de rotatie
    rotation: rnd(0, 20), // Beperkte rotatiehoek
    repeat: -1, // Herhaal de rotatie
    yoyo: true, // Keer terug naar de originele positie
    ease: "sine.inOut" // Zachte easing
  });
}

// Voeg een fade-in effect toe aan de container (voor een soepelere introductie)
gsap.to(target, { 
  duration: 3, // Fade-in duur
  opacity: 1, // Volledig zichtbaar maken
  ease: "none", // Geen extra easing
  delay: 1 // Start de fade-in na een vertraging van 1 seconde
});

/**
 * @author Fatima El Hilali
 * @file activities.js
 * @description Beheert de logica en filtering van activiteiten op basis van temperatuur.
 * @requires gsap
 * @see stackoverflow.com,youtube.com
 */

/**
 * @constant {Array<Object>} activities
 * @description Een array die een lijst van activiteiten bevat met bijbehorende details zoals titel, temperatuurvereisten, afbeeldingen en beschrijving.
 * 
 * Elk object in de array vertegenwoordigt een activiteit en bevat de volgende eigenschappen:
 * @property {string} title - De naam van de activiteit.
 * @property {number|null} minTemp - De minimale temperatuur waarbij de activiteit geschikt is (null betekent geen minimum).
 * @property {number|null} maxTemp - De maximale temperatuur waarbij de activiteit geschikt is (null betekent geen maximum).
 * @property {string[]} images - Een array met afbeeldingspaden voor de activiteit.
 * @property {string} description - Een beschrijving van de activiteit. HTML-tags zijn toegestaan voor opmaak.
 */
const activities = [
  {
    title: "Swimming",
    minTemp: 10,
    maxTemp: 30,
    images: ["assets/swim.png", "assets/swimming-2.png"],
    description: "In recreation and sports, the propulsion of the<br> body through water by combined arm and leg <br>motions.",
  },
  {
    title: "Ice Skating",
    minTemp: -5,
    maxTemp: 5,
    images: ["assets/ice-skating.png", "assets/ice-skating-2.png"],
    description: "Gliding gracefully or spinning with joy on a<br> frozen canvas of ice. Heerenveen is the<br> place to be!",
  },
  {
    title: "Walking",
    minTemp: -10,
    maxTemp: 35,
    images: ["assets/walk.png", "assets/walking-2.png"],
    description: "A simple and natural exercise that connects <br> us to the world, rejuvenates the mind, and <br> nourishes the body.",
  },
  {
    title: "Darts",
    minTemp: null,
    maxTemp: null,
    images: ["assets/dartboard.png", "assets/darts-2.png"],
    description: "Precision, focus, and camaraderie <br> combined in a game of skill and strategy.<br> It's crazy!",
  },
  {
    title: "Go to the beach",
    minTemp: 20,
    maxTemp: 35,
    images: ["assets/beach.png", "assets/beach-2.png"],
    description: "Where sun, sand, and waves create the <br> perfect setting for relaxation, tanning, and<br> fun.",
  },
  {
    title: "Cycling",
    minTemp: 5,
    maxTemp: 35,
    images: ["assets/cycling.png", "assets/cycling-2.png"],
    description: "A sustainable and exhilarating way to<br> explore the world on two wheels. It’s a <br>great way to exercise.",
  },
];

// DOM Elementen
/**
 * @type {HTMLInputElement} slider
 * @description Een slider waarmee de gebruiker de tijd en temperatuur kan aanpassen.
 */
const slider = document.querySelector(".time-slider");

/**
 * @type {HTMLElement} temperatureDisplay
 * @description Element dat de huidige temperatuur weergeeft naast de slider.
 */
const temperatureDisplay = document.querySelector(".current-temperature");

/**
 * @type {HTMLInputElement} temperatureInput
 * @description Invoerveld waar de gebruiker handmatig een temperatuur kan instellen.
 */
const temperatureInput = document.querySelector(".temperature-input");

/**
 * @constant {number[]} hourlyTemperatures
 * @description Een array die de temperaturen per uur van de dag bevat.
 */
const hourlyTemperatures = [
  0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 23, 22, 20, 18, 16, 14, 12, 10, 8,
];

/**
 * Haalt de huidige temperatuur op, op basis van handmatige invoer of de sliderwaarde.
 * @returns {number} De huidige temperatuur.
 */
function getTemperature() {
  const manualTemp = parseFloat(temperatureInput.value);

  // Controleer of de gebruiker een geldige temperatuur heeft ingevoerd
  if (!isNaN(manualTemp)) {
    return manualTemp;
  }

  // Als er geen handmatige invoer is, gebruik de waarde van de slider
  return hourlyTemperatures[slider.value];
}

/**
 * Valideert de invoer in het temperatuurveld.
 * Controleert of de invoer een geldig getal is.
 * @returns {boolean} True als de invoer geldig is, anders false.
 */
function validateTemperatureInput() {
  const manualTemp = temperatureInput.value.trim();

  if (manualTemp === "" || isNaN(parseFloat(manualTemp))) {
    alert("Please enter a valid number!");
    return false;
  }

  return true;
}

/**
 * Filtert de activiteiten op basis van de huidige temperatuur.
 * Roept een waarschuwing op als de temperatuur ongeldig is.
 */
function filterActivities() {
  if (!validateTemperatureInput()) {
    console.log("Invalid temperature input!");
    return;
  }

  const temp = getTemperature();
  console.log("Current temperature:", temp);

  let suitableContent = "";
  let unsuitableContent = "";

  // Controleer elke activiteit en bepaal of deze geschikt is voor de huidige temperatuur
  activities.forEach((activity) => {
    console.log(`Checking activity: ${activity.title}`);
    if (
      (activity.minTemp === null || temp >= activity.minTemp) &&
      (activity.maxTemp === null || temp <= activity.maxTemp)
    ) {
      console.log(`Suitable: ${activity.title}`);
      suitableContent += createActivityCard(activity);
    } else {
      console.log(`Not suitable: ${activity.title}`);
      unsuitableContent += createActivityCard(activity);
    }
  });

  // Toon de resultaten in een modaal venster
  displayActivitiesModal(suitableContent, unsuitableContent);
}

/**
 * Genereert de HTML voor een enkele activiteit.
 * @param {Object} activity - Het activiteit-object.
 * @returns {string} Een HTML-string die de activiteit weergeeft.
 */
function createActivityCard(activity) {
  return `
    <div class="activity-card">
      <img src="${activity.images[0]}" alt="${activity.title}">
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <button class="view-event-button" onclick="openModal(${JSON.stringify(
        activity
      ).replace(/"/g, "&quot;")})">View</button>
    </div>
  `;
}

/**
 * Voegt validatie toe aan het temperatuurinvoerveld (alleen getallen zijn toegestaan).
 */
temperatureInput.addEventListener("input", () => {
  const value = temperatureInput.value;

  if (isNaN(value) || value.trim() === "") {
    temperatureInput.setCustomValidity("Please enter a valid number!");
    temperatureInput.reportValidity();
  } else {
    temperatureInput.setCustomValidity("");
  }
});

/**
 * Event listener voor de slider om de temperatuurweergave bij te werken.
 */
slider.addEventListener("input", updateSliderTemperature);

/**
 * Werkt de temperatuurweergave naast de slider bij op basis van de huidige waarde.
 */
function updateSliderTemperature() {
  const temp = hourlyTemperatures[slider.value];
  temperatureDisplay.textContent = `${temp}°C`;
}

// Initialiseer de temperatuurweergave bij het laden van de pagina
updateSliderTemperature();

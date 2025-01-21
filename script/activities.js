/**
 * @author Fatima El Hilali
 * @file activities.js
 * @description Beheert de logica en filtering van activiteiten op basis van temperatuur.
 * @requires gsap  
 * @see  stackoverflow.com
 * 
 */

// Activiteitenarray met data2
const activities = [
  {


    title: "Swimming",
    minTemp: 10,
    maxTemp: 30,
    images: ["assets/swim.png", "assets/swimming-2.png"],
    description: "In recreation and sports, the propulsion of the<br> body through water by combined arm and leg <br>motions."
  },

  {
    title: "Ice Skating",
    minTemp: -5,
    maxTemp: 5,
    images: ["assets/ice-skating.png", "assets/ice-skating-2.png"],
    description: "Gliding gracefully or spinning with joy on a<br> frozen canvas of ice. Heerenveen is the<br> place to be!"
  },
  {
    title: "Walking",
    minTemp: -10,
    maxTemp: 35,
    images: ["assets/walk.png", "assets/walking-2.png"],
    description: "A simple and natural exercise that connects <br> us to the world, rejuvenates the mind, and <br> nourishes the body."
  },
  {
    title: "Darts",
    minTemp: null,
    maxTemp: null,
    images: ["assets/dartboard.png", "assets/darts-2.png"],
    description: "Precision, focus, and camaraderie <br> combined in a game of skill and strategy.<br> It's crazy!"
  },
  {
    title: "Go to the beach",
    minTemp: 20,
    maxTemp: 35,
    images: ["assets/beach.png", "assets/beach-2.png"],
    description: "Where sun, sand, and waves create the <br> perfect setting for relaxation, tanning, and<br> fun."
  },
  

  {
    title: "Cycling",
    minTemp: 5,
    maxTemp: 35,
    images: ["assets/cycling.png", "assets/cycling-2.png"],
    description: "A sustainable and exhilarating way to<br> explore the world on two wheels. It’s a <br>great way to exercise."
  }
];

// Elementen
const slider = document.getElementById("slider");
const temperatureDisplay = document.getElementById("temperature-display");
const temperatureInput = document.getElementById("temperature-input");

// Uurtemperaturen (voorbeelddata)
const hourlyTemperatures = [
  0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 23, 22, 20, 18, 16, 14, 12, 10, 8
];

/**
 * Haalt de huidige temperatuur op (slider of handmatige invoer).
 * Controleert of de invoer een geldig getal is en gebruikt de slider als fallback.
 * @returns {number} De huidige temperatuur op basis van invoer of sliderwaarde.
 */
function getTemperature() {
  const manualTemp = parseFloat(temperatureInput.value);

  if (!isNaN(manualTemp)) {
    return manualTemp;
  }

  const sliderTemp = hourlyTemperatures[slider.value];
  return sliderTemp;
}

/**
 * Controleert of er een geldige temperatuur is ingevoerd.
 * Geeft een foutmelding als er geen invoer is.
 * @returns {boolean} True als de temperatuur geldig is, anders false.
 */
function validateTemperatureInput() {
  const manualTemp = temperatureInput.value.trim();

  if (manualTemp === "" || isNaN(parseFloat(manualTemp))) {
    alert("Please enter a valid number!.");
    return false;
  }

  return true;
}

/**
 * Filtert activiteiten op basis van temperatuur.
 * Geeft een waarschuwing als de temperatuur ongeldig is of niet is ingevoerd.
 */
function filterActivities() {
  if (!validateTemperatureInput()) {
    return;
  }

  const temp = getTemperature();

  let suitableContent = "";
  let unsuitableContent = "";

  activities.forEach((activity) => {
    const cardHTML = createActivityCard(activity);

    if (
      (activity.minTemp === null || temp >= activity.minTemp) &&
      (activity.maxTemp === null || temp <= activity.maxTemp)
    ) {
      suitableContent += cardHTML;
    } else {
      unsuitableContent += cardHTML;
    }
  });

  displayActivitiesModal(suitableContent, unsuitableContent);
}

/**
 * Genereert HTML voor een enkele activiteitenkaart.
 * @param {Object} activity - Activiteit.
 * @returns {string} HTML-string.
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
 * Validatie voor het temperatuur-invoerveld (alleen getallen toestaan).
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

// Event listener voor de slider
slider.addEventListener("input", updateSliderTemperature);

/**
 * Update de temperatuurweergave naast de slider op basis van de huidige sliderpositie.
 */
function updateSliderTemperature() {
  const temp = hourlyTemperatures[slider.value];
  temperatureDisplay.textContent = `${temp}°C`;
}

// Initialiseer temperatuurweergave
updateSliderTemperature();

/**
 * @file footer.js
 * @author Fatima El Hilali
 * @description
 * Dit script implementeert de functionaliteit om een dropdownmenu
 * voor locaties in de footer van een website te tonen en te verbergen
 * wanneer de gebruiker erop klikt.
 */

// Functie om het locatie-dropdownmenu te toggelen

/**
 * @function toggleLocationMenu
 * @description
 * Toont of verbergt het dropdownmenu voor locaties in de footer op basis van de huidige zichtbaarheid.
 * Bij een klik controleert het de huidige status (zichtbaar of niet zichtbaar) en past het de stijl aan.
 */
function toggleLocationMenu() {
    // Selecteer het dropdownmenu-element
    const dropdown = document.querySelector('.location-menu');

    // Controleer of het dropdownmenu momenteel zichtbaar is
    const isVisible = dropdown.style.display === 'block';

    // Wissel de zichtbaarheid op basis van de huidige status
    dropdown.style.display = isVisible ? 'none' : 'block';
}

/**
 * @file content-toggle.js
 * @author Fatima El Hilali
 * @description
 * Dit script implementeert de "READ MORE" en "READ LESS" functionaliteit
 * met behulp van GSAP-animaties. Het toont of verbergt een tweede paragraaf
 * op basis van gebruikersinteractie.
 *
 * @requires gsap
 * @see https://greensock.com/docs/ - Officiële documentatie van GSAP.
 */

// Selecteer de benodigde DOM-elementen

/**
 * @constant {HTMLElement} readMoreBtn
 * @description De knop waarmee de gebruiker de tweede paragraaf kan tonen ("READ MORE").
 */
const readMoreBtn = document.querySelector('.toggle-content-btn');

/**
 * @constant {HTMLElement} readLessLink
 * @description De link waarmee de gebruiker de tweede paragraaf kan verbergen ("READ LESS").
 */
const readLessLink = document.querySelector('.read-less');

/**
 * @constant {HTMLElement} paragraph2
 * @description De tweede paragraaf die standaard verborgen is.
 */
const paragraph2 = document.querySelector('.paragraph--hidden');

/**
 * Toont de tweede paragraaf met een vloeiende GSAP-animatie.
 * 
 * @function showParagraph
 * @description Maakt de verborgen paragraaf zichtbaar door middel van een animatie.
 * De animatie regelt zowel de hoogte als de zichtbaarheid van het element.
 */
function showParagraph() {
    gsap.fromTo(
        paragraph2,
        {
            // Startwaarden: verborgen en niet zichtbaar
            opacity: 0,
            height: 0,
            display: 'none',
        },
        {
            // Eindwaarden: volledig zichtbaar
            opacity: 1,
            height: 'auto',
            display: 'block',
            duration: 0.6, // Duur van de animatie in seconden
            ease: 'power3.out', // Soepele overgang
        }
    );
}

/**
 * Verbergt de tweede paragraaf met een vloeiende GSAP-animatie.
 * 
 * @function hideParagraph
 * @description Verwijdert de paragraaf van het scherm met een vloeiende overgang
 * en zet de `display`-eigenschap op 'none' na voltooiing.
 */
function hideParagraph() {
    gsap.to(paragraph2, {
        // Animatie naar volledig verborgen
        opacity: 0,
        height: 0,
        duration: 0.6, // Duur van de animatie in seconden
        ease: 'power3.in', // Versnellende overgang
        onComplete: () => {
            paragraph2.style.display = 'none'; // Element volledig verbergen
        },
    });
}

/**
 * Event listener voor de "READ MORE" knop.
 * 
 * @description
 * Toont de tweede paragraaf en verbergt de "READ MORE" knop.
 * Deze functionaliteit wordt geactiveerd door een klik op de knop.
 */
readMoreBtn.addEventListener('click', function () {
    showParagraph(); // Speel de animatie af om de tweede paragraaf zichtbaar te maken

    // Verberg de "READ MORE" knop
    readMoreBtn.style.display = 'none';

    // Toon de "READ LESS" link
    readLessLink.style.display = 'inline'; 
});

/**
 * Event listener voor de "READ LESS" link.
 * 
 * @description
 * Verbergt de tweede paragraaf en toont de "READ MORE" knop.
 * Deze functionaliteit wordt geactiveerd door een klik op de link.
 * 
 * @param {Event} e - Het event-object dat gegenereerd wordt bij een klik.
 */
readLessLink.addEventListener('click', function (e) {
    e.preventDefault(); // Voorkomt dat de link standaard wordt gevolgd (zoals naar een URL navigeren)

    hideParagraph(); // Speel de animatie af om de paragraaf te verbergen

    // Toon de "READ MORE" knop
    readMoreBtn.style.display = 'inline-block';

    // Verberg de "READ LESS" link
    readLessLink.style.display = 'none';
});

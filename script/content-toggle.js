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
const readMoreBtn = document.getElementById('readMoreBtn'); // Knop voor "READ MORE"
const readLessLink = document.getElementById('readLessLink'); // Link voor "READ LESS"
const paragraph2 = document.getElementById('paragraph2'); // Tweede paragraaf

/**
 * Toon de tweede paragraaf met GSAP-animatie.
 * De paragraaf wordt zichtbaar met een vloeiende overgang.
 *
 * @function showParagraph
 */
function showParagraph() {
    gsap.fromTo(
        paragraph2,
        {
            opacity: 0,
            height: 0,
            display: 'none', // Startwaarde: verborgen
        },
        {
            opacity: 1,
            height: 'auto',
            display: 'block', // Eindwaarde: zichtbaar
            duration: 0.6,
            ease: 'power3.out', // Soepele animatie
        }
    );
}

/**
 * Verberg de tweede paragraaf met GSAP-animatie.
 * De paragraaf verdwijnt met een vloeiende overgang.
 *
 * @function hideParagraph
 */
function hideParagraph() {
    gsap.to(paragraph2, {
        opacity: 0,
        height: 0,
        duration: 0.6,
        ease: 'power3.in', // Versnellende animatie
        onComplete: () => {
            paragraph2.style.display = 'none'; // Zet display op 'none' na de animatie
        },
    });
}

/**
 * Event listener voor de "READ MORE" knop.
 * Toont de tweede paragraaf en verbergt de "READ MORE" knop.
 */
readMoreBtn.addEventListener('click', function () {
    showParagraph(); // Speel de animatie af om de paragraaf te tonen

    // Verberg de "READ MORE" knop en toon de "READ LESS" link
    readMoreBtn.style.display = 'none';
    readLessLink.style.display = 'inline'; // Toon de "READ LESS" link
});

/**
 * Event listener voor de "READ LESS" link.
 * Verbergt de tweede paragraaf en toont de "READ MORE" knop.
 *
 * @param {Event} e - Het event-object dat gegenereerd wordt bij een klik op de link.
 */
readLessLink.addEventListener('click', function (e) {
    e.preventDefault(); // Voorkom standaard linkgedrag

    hideParagraph(); // Speel de animatie af om de paragraaf te verbergen

    // Toon de "READ MORE" knop en verberg de "READ LESS" link
    readMoreBtn.style.display = 'inline-block';
    readLessLink.style.display = 'none';
});




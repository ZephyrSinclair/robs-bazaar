const consolesText = document.querySelector('#consoles-card-content');
const gamesText = document.querySelector('#game-text');
const cardsText = document.querySelector('#cards-card-content');
const otherText = document.querySelector('#other-card-content');

window.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.group .text');
    const group = document.querySelector('.group');
    if (text && group) {
        // Calculate the distance to scroll: text width + group width
        const textWidth = text.offsetWidth;
        const groupWidth = group.offsetWidth;
        const distance = text.scrollWidth + group.offsetWidth;

        document.querySelectorAll('style[data-scrollText]').forEach(s => s.remove());

         // Create a dynamic keyframes rule only once
        const styleSheet = document.createElement('style');
        styleSheet.setAttribute('data-scrollText', 'true');
        styleSheet.innerHTML = `
        @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${distance}px); }
        }`;
        document.head.appendChild(styleSheet);

        text.style.animation = `scrollText 55s linear infinite`;
        // text.style.animationFillMode = 'forwards';
        text.style.willChange = 'transform';
    }
});



window.addEventListener('resize', function() {
    if (this.window.innerWidth < 1100) {
        gamesText.textContent = 'Mario Kart * Sonic Adventure * Donkey Kong * Final Fanstasy * Mega Man & More!';
        consolesText.textContent = 'Playstation * XBOX * Nintendo * Sega * Atari * PC & More!';
    } else {
        gamesText.textContent = 'Mario Kart *  Sonic Adventure * Donkey Kong * Final Fantasy * Battle Toads * Mega Man & More!'
        consolesText.textContent = 'Playstation * XBOX 360 * Nintendo * Sega * Atari * PC * & More!';
    }
})

window.addEventListener('resize', function() {
    if (this.window.innerWidth < 985) {
        cardsText.textContent = 'Pokemon * Yu-Gi-Oh * Magic: The Gathering * Lorcana & More!';
    } else {
        'Pokemon * Yu-Gi-Oh * Magic: The Gathering * Dragon Ball Z * Lorcana & More!';
        consolesText.textContent = 'Playstation * XBOX 360 * Nintendo * Sega * Atari * PC * & More!';
    }
})

window.addEventListener('resize', function(){
    if (this.window.innerWidth < 761) {
        gamesText.textContent = 'Mario Kart * Donkey Kong * Final Fanstasy * Mega Man & More!';
        consolesText.textContent = 'Playstation * XBOX * Nintendo * Sega * PC & More!';
    } else {
        gamesText.textContent = 'Mario Kart * Sonic Adventure * Donkey Kong * Final Fanstasy * Mega Man & More!';
        consolesText.textContent = 'Playstation * XBOX * Nintendo * Sega * Atari * PC & More!';
    }
});




window.addEventListener('resize', function() {
    const homeText = this.document.getElementById('home');
    if (this.window.innerWidth < 682) {
        homeText.style.display = 'none';
    }
})


window.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.group .text');
    const group = document.querySelector('.group');
    if (text && group) {
        // Calculate the distance to scroll: text width + group width
        const textWidth = text.offsetWidth;
        const groupWidth = group.offsetWidth;
        const distance = textWidth + groupWidth;

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

        text.style.animation = `scrollText 25s linear infinite`;
        text.style.animationFillMode = 'forwards';
        text.style.willChange = 'transform';
    }
});



window.addEventListener('resize', function(){
    const gamesText = this.document.querySelector('#games-card-content');
    const consolesText = this.document.querySelector('#consoles-card-content');

    if (this.window.innerWidth < 1100) {
        gamesText.textContent = 'Mario Kart ** Sonic Adventure ** Donkey Kong ** Final Fanstasy ** Mega Man & More!';
        consolesText.textContent = 'Playstation ** XBOX ** Nintendo ** Sega ** Atari ** PC & More!';
    } else {
        gamesText.textContent = 'Mario Kart **  Sonic Adventure ** Donkey Kong ** Final Fantasy ** Battle Toads ** Mega Man & More!'
    }
})


window.addEventListener('resize', function() {
    const homeText = this.document.getElementById('home');
    if (this.window.innerWidth < 682) {
        homeText.style.display = 'none';
    }
})

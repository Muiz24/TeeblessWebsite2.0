// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

// Audio Play Functionality
function playAudio(button, audioSrc, externalLink) {
    // Stop other audio elements
    const audios = document.querySelectorAll('.audio-sample');
    audios.forEach(audio => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    // Play selected audio
    const audioElement = button.nextElementSibling;
    audioElement.src = audioSrc; // Ensure correct src is set
    audioElement.play();

    // Open external link
    setTimeout(() => {
        window.open(externalLink, '_blank');
    }, 2000); // Opens link after 2 seconds
}

// Close Mobile Menu on Link Click
const menuLinks = document.querySelectorAll('.navbar__links');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarMenu.classList.contains('show')) {
            navbarMenu.classList.remove('show');
        }
    });
});
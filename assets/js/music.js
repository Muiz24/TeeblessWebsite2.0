// Select the menu button and the menu container
const menuButton = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu'); // Change to match your menu class or add an ID in HTML

// Add an event listener to toggle the 'visible' class on click
menuButton.addEventListener('click', function() {
    // Toggle the class that controls visibility
    navbarMenu.classList.toggle('visible');
});

// Optional: close the menu if clicked outside
document.addEventListener('click', function(event) {
    if (!navbarMenu.contains(event.target) && event.target !== menuButton) {
        // Remove the 'visible' class if click is outside menu
        navbarMenu.classList.remove('visible');
    }
});

// Function to play audio for 30 seconds and then redirect
function playAudio(button, audioSrc, redirectUrl) {
    const audio = button.nextElementSibling; // Select the audio element
    audio.src = audioSrc; // Set the correct audio source
    audio.play(); // Start playing the audio
    button.disabled = true; // Disable the button during playback
    
    // After 30 seconds, enable redirection and reset the button
    setTimeout(() => {
        button.disabled = false;
        window.location.href = redirectUrl; // Redirect to the streaming platform
    }, 30000); // 30 seconds in milliseconds
}

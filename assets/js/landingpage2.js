// Navbar Toggle Functionality
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
});

// Smooth Scrolling

const menuLinks = document.querySelectorAll(".navbar__menu a");
menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
        // Close the menu after navigating
        navbarMenu.classList.remove("active");
    });
});

// Music Play Button Alert
const playButtons = document.querySelectorAll('.music__card button');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Playing song preview. Full feature coming soon!');
    });
});

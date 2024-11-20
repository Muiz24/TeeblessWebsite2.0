const menu = document.querySelector('.navbar__menu');
const toggle = document.querySelector('#mobile-menu');

toggle.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  toggle.classList.toggle('is-active'); // Adds class to animate the menu icon

});


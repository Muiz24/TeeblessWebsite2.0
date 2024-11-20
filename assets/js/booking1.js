// Toggle Mobile Menu
const mobileMenu = document.getElementById("mobile-menu");
const navbarMenu = document.querySelector(".navbar__menu");

mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
});

// Form Validation
const bookingForm = document.querySelector(".booking__form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const eventInput = document.getElementById("event");

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission for validation

    let errors = [];

    // Validate Name
    if (nameInput.value.trim() === "") {
        errors.push("Name is required.");
    }

    // Validate Email
    if (!validateEmail(emailInput.value)) {
        errors.push("A valid email is required.");
    }

    // Validate Phone
    if (!validatePhone(phoneInput.value)) {
        errors.push("A valid phone number is required.");
    }

    // Validate Event Details
    if (eventInput.value.trim() === "") {
        errors.push("Event details are required.");
    }

    if (errors.length > 0) {
        alert(`Please fix the following errors:\n\n${errors.join("\n")}`);
    } else {
        alert("Your booking request has been successfully submitted!");
        bookingForm.reset(); // Clear form fields
    }
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone Validation Function
function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10,15}$/; // Allows 10-15 digits
    return phoneRegex.test(phone);
}

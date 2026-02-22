// script.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    // Additional code for processing form data...
}

// Add event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
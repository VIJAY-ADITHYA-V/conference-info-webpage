// script.js

// Function to validate form inputs
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';

    // Simple validation
    if (nameInput.value.trim() === '') {
        errorMessage.innerText += 'Name is required.\n';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        errorMessage.innerText += 'Please enter a valid email address.\n';
    }

    if (errorMessage.innerText !== '') {
        return false;
    }
    return true;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (validateForm()) {
        // Process the form (e.g., send to a server)
        alert('Form submitted successfully!');
    } else {
        alert('Please correct the errors in the form.');
    }
}

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', handleSubmit);
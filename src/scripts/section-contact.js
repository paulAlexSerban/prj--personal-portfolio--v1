import "../styles/section-contact.scss";

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formStatusMessage = document.querySelector('.form-status-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;
            formStatusMessage.textContent = ''; // Clear previous status message

            // Clear previous error messages
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => el.classList.remove('invalid'));

            // Validate Name
            const nameInput = document.getElementById('name');
            if (!nameInput.value.trim()) {
                displayError(nameInput, 'Name is required.');
                isValid = false;
            }

            // Validate Email
            const emailInput = document.getElementById('email');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                displayError(emailInput, 'Email is required.');
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            // Validate Message
            const messageTextarea = document.getElementById('message');
            if (!messageTextarea.value.trim()) {
                displayError(messageTextarea, 'Message is required.');
                isValid = false;
            }

            if (isValid) {
                // If form is valid, simulate a successful submission
                formStatusMessage.textContent = 'Message sent successfully! (Simulated)';
                formStatusMessage.style.color = 'var(--accent-color)';
                contactForm.reset(); // Clear the form
            } else {
                formStatusMessage.textContent = 'Please correct the errors in the form.';
                formStatusMessage.style.color = 'var(--accent-secondary)';
            }
        });
    }

    function displayError(inputElement, message) {
        const formGroup = inputElement.closest('.form-group');
        const errorMessageDiv = formGroup.querySelector('.error-message');
        inputElement.classList.add('invalid');
        errorMessageDiv.textContent = message;
    }
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Validate form
    if (name === '' || email === '' || message === '') {
        feedbackMessage.textContent = 'All fields are required.';
        feedbackMessage.style.color = 'red';
    } else if (!validateEmail(email)) {
        feedbackMessage.textContent = 'Please enter a valid email address.';
        feedbackMessage.style.color = 'red';
    } else {
        feedbackMessage.textContent = 'Thank you for your feedback!';
        feedbackMessage.style.color = 'green';

        // Clear form
        document.getElementById('feedbackForm').reset();
    }
});

function validateEmail(email) {
    // Simple email validation regex
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

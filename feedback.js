document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Validate form
    if (name === '' || email === '' || message === '') {
        feedbackMessage.textContent = 'Isi semua data yang ada.';
        feedbackMessage.style.color = 'red';
    } else if (!validateEmail(email)) {
        feedbackMessage.textContent = 'Masukan email yang valid boss!';
        feedbackMessage.style.color = 'red';
    } else {
        feedbackMessage.textContent = 'Terimakasih atas feedbacknya!';
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

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.querySelector('.input-box input[type="email"]').value;

    // Here, you would typically send a request to your server to handle the password reset
    // For demonstration, we’ll just show an alert
    alert(`A password reset link has been sent to ${email}.`);
    
    // After this, you can redirect to the login page or perform other actions
});

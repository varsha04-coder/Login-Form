document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.querySelector('.input-box input[type="text"]').value;
    const email = document.querySelector('.input-box input[type="email"]').value;
    const password = document.querySelector('.input-box input[type="password"]').value;
    const confirmPassword = document.querySelectorAll('.input-box input[type="password"]')[1].value;

    // Basic validation logic
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // For demonstration, we'll just show an alert with the user info
    alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}`);
    
    // Here, you would typically send the data to a server
});

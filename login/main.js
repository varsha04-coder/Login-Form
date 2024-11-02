document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.querySelector('.input-box input[type="text"]').value;
    const password = document.querySelector('.input-box input[type="password"]').value;

    // Simple validation logic
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // You can redirect or perform other actions here
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

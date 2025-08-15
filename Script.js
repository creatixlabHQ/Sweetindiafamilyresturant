document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Expected credentials
    const correctUsername = "sweetindia";
    const correctPassword = "12388";

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        messageElement.textContent = 'Login Successful!';
        messageElement.className = 'success';
        // You can redirect the user to another page here
        // window.location.href = "dashboard.html"; 
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.className = 'error';
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
});
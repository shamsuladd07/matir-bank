document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordlField = document.getElementById('user-password');
    const userPassword = passwordlField.value;
    // check email and password
    if (userEmail == 'shamsul@shamim.com' && userPassword == 'shamim') {
        window.location.href = 'banking.html';
    }
});


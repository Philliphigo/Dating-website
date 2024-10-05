// validation.js

document.addEventListener('DOMContentLoaded', function() {
    // Get the login form and signup form
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Validate login form
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert('Please fill in all fields');
                event.preventDefault(); // Prevent form submission
            }
        });
    }

    // Validate signup form
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!name || !email || !password) {
                alert('Please fill in all fields');
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});

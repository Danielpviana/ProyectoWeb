const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');



// Add event listener for form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Perform form validation here
    if (validateLoginForm()) {
        alert('Ingreso válido. Confirmando...');
        // Uncomment the line below to actually submit the form
        //loginForm.submit();
    }
});



// Function to validate the login form
function validateLoginForm() {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is in a valid format
    if (!emailRegex.test(email)) {
        alert('Ingrese un formato de email válido.');
        return false;
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        alert('La contraseña debe contener al menos 8 caracteres.');
        return false;
    }

    if (email.trim() === '' || password.trim() === '') {
        alert('Por favor llene todos los campos.');
        return false;
    }

    return true;
}


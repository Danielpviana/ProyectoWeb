const signupForm = document.getElementById('signup-form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const signupEmailInput = document.getElementById('signupEmail');
const signupPasswordInput = document.getElementById('signupPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const addressInput = document.getElementById('address');

// Add event listener for sign-up form submission
signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Perform sign-up form validation here
    if (validateSignupForm()) {
        // If the form is valid, you can submit it to the server or take other actions
        alert('Datos ingresador corectamente. Confirmando...');
        // Uncomment the line below to actually submit the form
        // signupForm.submit();
    }
});

// Function to validate the sign-up form
function validateSignupForm() {
    //const firstName = firstNameInput.value;
    //const lastName = lastNameInput.value;
    const signupEmail = signupEmailInput.value;
    const signupPassword = signupPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    //const address = addressInput.value;

    // Regular expression for email format validation
    const signupEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is in a valid format
    if (!signupEmailRegex.test(signupEmail)) {
        alert('Ingrese un formato de email válido.');
        return false;
    }

    // Check if the password is at least 8 characters long
    if (signupPassword.length < 8) {
        alert('La contraseña debe contener al menos 8 caracteres.');
        return false;
    }

    // Check if the passwords match
    if (signupPassword !== confirmPassword) {
        alert('Las contraseñas deben coincidir.');
        return false;
    }

    console.error();
    return true;
}
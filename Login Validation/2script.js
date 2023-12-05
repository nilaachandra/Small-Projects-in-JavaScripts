let eyeIcon = document.getElementById('eye');
let password = document.getElementById('password');
let username = document.getElementById('username');

function revealEye() {
    if (password.type == "password") {
        password.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}
eyeIcon.addEventListener('click', revealEye);

function checkUsername() {
    let usernameValue = username.value;
    let errorMsg = document.getElementById('usernameErrorMsg');

    if (usernameValue.length < 4) {
        if (!errorMsg) {
            errorMsg = document.createElement('p');
            errorMsg.textContent = 'Username is too short';
            errorMsg.style.color = 'red';
            errorMsg.id = 'usernameErrorMsg';
            username.after(errorMsg);
        }
    } else {
        if (errorMsg) {
            errorMsg.remove();
        }
    }
}
username.addEventListener('input', checkUsername);

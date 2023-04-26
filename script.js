const passwordErrorMsg = document.getElementById("password-error-msg");
const confirmPasswordErrorMsg = document.getElementById(
  "confirm-password-error-msg"
);

function validateForm() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm_password").value;
  validatePassword(password);
  validateConfirmPassword(password, confirmPassword);
}

function validatePassword(password) {
  passwordErrorMsg.innerHTML = "";
  let errors = [];
  if (password.length < 8) {
    passwordErrorMsg.innerHTML =
      "*Your password must be at least 8 characters.";
    return false;
  }
  if (password.search(/[a-z]/i) < 0) {
    passwordErrorMsg.innerHTML =
      "*Your password must contain at least 1 letter.";
    return false;
  }
  if (password.search(/[0-9]/) < 0) {
    passwordErrorMsg.innerHTML =
      "*Your password must contain at least 1 digit.";
    return false;
  }
  return true;
}

function validateConfirmPassword(password, confirmPassword) {
  confirmPasswordErrorMsg.innerHTML = "";
  if (password !== confirmPassword) {
    confirmPasswordErrorMsg.innerHTML = "*Passwords do not match";
    return false;
  }
  return true;
}

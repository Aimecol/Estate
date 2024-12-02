const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

document
  .querySelector(".toggle-password")
  .addEventListener("click", function () {
    const icon = this.querySelector("i");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(element, errorElement) {
  element.style.borderColor = "#e53e3e";
  errorElement.style.display = "block";
  element.parentElement.classList.add("shake");
  setTimeout(() => {
    element.parentElement.classList.remove("shake");
  }, 500);
}

function hideError(element, errorElement) {
  element.style.borderColor = "#e2e8f0";
  errorElement.style.display = "none";
}

// Real-time validation
emailInput.addEventListener("input", () => {
  if (emailInput.value) {
    if (!validateEmail(emailInput.value)) {
      showError(emailInput, emailError);
    } else {
      hideError(emailInput, emailError);
    }
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value) {
    if (passwordInput.value.length < 8) {
      showError(passwordInput, passwordError);
    } else {
      hideError(passwordInput, passwordError);
    }
  }
});

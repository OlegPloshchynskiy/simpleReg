const regForm = document.forms.reg
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const passError = document.querySelector(".passError");
const pass = document.querySelector("#password");
const repPass = document.querySelector("#repeatPassword");
const submit = document.querySelector("#submit");
const alert = document.querySelector(".login-success")

email.addEventListener("blur", function() {
  if (!email.value.includes("@")) {
    emailError.classList.add("error")
    emailError.innerHTML = "You should write email with '@'"
  }
})

email.addEventListener("focus", function() {
  if (emailError.classList.contains("error")) {
    emailError.classList.remove("error");
    emailError.innerHTML = ''
  }
})

function checkPass() {
  if (pass.value === repPass.value && checkPassSymbols) {
    passError.classList.remove("error");
    passError.innerHTML = '';
    alert.style.transform = "translateY(0)";
    setTimeout(() => {
      email.value = '';
      pass.value = '';
      repPass.value = '';
      alert.style.transform = "translateY(-500px)";
    }, 2000)
  } else {
    passError.classList.add("error");
    passError.innerHTML = 'Passwords are not the same';
  }
}

function checkPassSymbols() {
  if (pass.value.includes(",") || pass.value.includes("-") || pass.value.includes("/") || pass.value.includes("\\") || pass.value.includes("_") || pass.value.includes("|") || pass.value.includes("&")) {
    passError.classList.add("error");
    passError.innerHTML = "You cant use this symbols (, - / | \ _ &)"
  } else {
    checkPass()
  }
}

function checkPassLength() {
  if (pass.value.length < 8) {
    passError.classList.add("error");
    passError.innerHTML = "Passwords length must be 8 and more symbols"
  } else {
    checkPassSymbols();
  }
}

repPass.addEventListener("focus", function() {
  if (passError.classList.contains("error")) {
    passError.classList.remove("error");
    passError.innerHTML = ''
  }
})

submit.addEventListener("click", function(event) {
  event.preventDefault();
  checkPassLength();
})
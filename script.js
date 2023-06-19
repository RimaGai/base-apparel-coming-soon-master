const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");
const input = document.querySelector("#email");

function checkEmail() {
  const emailValue = input.value.trim();
  if (emailValue === "" || !validate(emailValue)) {
    errorMessage.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    form.classList.add("error");
  } else {
    errorMessage.classList.add("hidden");
    errorIcon.classList.add("hidden");
    form.classList.remove("error");
  }
}

function validate(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkEmail();
});

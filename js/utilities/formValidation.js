/* import { isEmailCorrect, isPasswordCorrect } from "../utilities/validators.js";
//import { getUsername } from "../static/dataStore.js";

const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("button");
const message = document.querySelector(".alerts-container");

//email.addEventListener("keyup", toggleButton);
//password.addEventListener("keyup", toggleButton);

email.addEventListener("input", toggleButton);
password.addEventListener("input", toggleButton);

function toggleButton() {
    const emailValue = email.value;
    const passwordValue = password.value;

    if (isEmailCorrect(emailValue) && isPasswordCorrect(passwordValue)) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    console.log("form submitted");

} */
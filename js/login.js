import messageAlerts from "./components/messageAlerts.js";
import { addTokenKey, addUser } from "./static/dataStore.js";
import { baseUrl } from "./setup-api/api.js";

const form = document.querySelector("#loginForm");
//alert(form);
const username = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".alert-container");


form.addEventListener("submit", submitForm);

function submitForm(event) {

//    alert("inside form");

    event.preventDefault();

    message.innerHTML = "";

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue.length === 0 || passwordValue.length === 0) {
       return messageAlerts("warning", "Invalid values", ".alert-container");
    }

    userLogin(emailValue, passwordValue);

}
  
async function userLogin(username, password) {
    const url = baseUrl + "auth/local";

///   alert("here");

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            //property holding an object - postman
            "Content-Type": "application/json",
        },
    };


    try {
        const response = await fetch(url, options);
        const json = await response.json();

        console.log(json);

       if (json.user) {
    //       messageAlerts("success", "Log in was Successfully done!", ".alert-container");

            addTokenKey(json.jwt);
            addUser(json.user);

            location.href = "/";

       }

        if (json.error) {
            messageAlerts("warning", "Login details not valid!", ".alert-container");
        }

    } catch (error) {
        console.log(error);
    }
} 


//jwt token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwia…0MjZ9.uyN0vi1sfM9Gr6jqIy4UmDkbpICTVWv8DcIjDiFoX_8"



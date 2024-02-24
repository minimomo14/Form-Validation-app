const form = document.getElementById("form");
const createPassword = document.getElementById("createPassword");
const confirmPassword = document.getElementById("confirmPassword");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");


//global boolean
let isValid = false;

function validateForm() {
    // using contraint API
    isValid = form.checkVisibility();
    // console.log(isValid);
    // style message for an error
    message.textContent = "Please fill out all the fields before submitted.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    
}

// handle submit button
// create function processForm()
function processForm(e) {
    e.preventDefault();
    // console.log("event happen here", e)
    // validate form function
    validateForm();
    // store data
}

form.addEventListener("submit", processForm)

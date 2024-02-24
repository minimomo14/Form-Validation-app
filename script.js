const form = document.getElementById("form");
const createPassword = document.getElementById("createPassword");
const confirmPassword = document.getElementById("confirmPassword");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

//global variables
let isValid = false;
let isPasswordMatch = false;

function validateForm() {
  // using contraint API
  isValid = form.checkVisibility();
  // console.log(isValid);
  // style message for an error
  // check if isValid = false
  if (!isValid) {
    message.textContent = "Please fill out all the fields before submitted.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  // then check if password is match
  if (createPassword.value === confirmPassword.value) {
    isPasswordMatch = true;
    createPassword.style.borderColor = "green";
    confirmPassword.style.borderColor = "green";
  } else {
    // otherwise display false style to user
    isPasswordMatch = false;
    message.textContent =
      "Sorry, your password did not match. Please try again!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    createPassword.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
    return;
  }

  // if both isValid and isPasswordMatch is true then show's successfully registered! message.
  if (isValid && isPasswordMatch) {
    message.textContent = "Successfully registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

// create function to store form data
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // see user data by console.log
    // we can use that data later
    console.log(user);
}

// handle submit button
// create function processForm()
function processForm(e) {
  e.preventDefault();
  // console.log("event happen here", e)
  // validate form function
  validateForm();
  // store data and submitted data if valid form was inputted correctly
  if (isValid && isPasswordMatch) {
    storeFormData();
  }

}

form.addEventListener("submit", processForm);

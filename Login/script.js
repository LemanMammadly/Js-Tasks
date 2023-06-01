"use strict";

let defaultEmail = "laman.mammad@gmail.com";
let defaultPassword = "123456";

function checkLogin() {
  let email = document.getElementById("email");
  let emailValue = email.value;

  let pass = document.getElementById("pass");
  let passValue = pass.value;
  if (emailValue == defaultEmail && passValue == defaultPassword) {
    alert("Welcome to Page");
  } else {
    alert("Email or password is wrong! Please try again.");
  }
}

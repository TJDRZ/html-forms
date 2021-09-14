const Validation = (() => {
  // Validation if proper <input> of type="email"
  (function emailValidation() {
    const email = document.querySelector("#email");
    email.addEventListener("invalid", () => {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid e-mail address");
      } else {
        email.setCustomValidity("");
      }
    });
  })();

  // Validation if PW meets regex pattern on <input>
  (function passwordValidation() {
    const password = document.querySelector("#password");
    password.addEventListener("input", () => {
      if (password.validity.patternMismatch) {
        password.setCustomValidity(
          "Please make sure the password follows the requirements on the form"
        );
      } else {
        password.setCustomValidity("");
      }
    });
  })();

  // Change style on PW rule <p>'s back and forth on conditions met
  (function passwordRules() {
    const password = document.querySelector("#password");
    const charRule = document.querySelector("#char-rule");
    const charRegEx = /(?=^.{8,}$)/;
    const numRule = document.querySelector("#num-rule");
    const numRegEx = /(?=.*\d)/;
    const specRule = document.querySelector("#spec-rule");
    const specRegEx = /(?=.*[!@#$%^&*]+)/;
    const caseRule = document.querySelector("#case-rule");
    const caseRegEx = /(?=.*[A-Z])(?=.*[a-z])/;
    password.addEventListener("input", () => {
      charRegEx.test(password.value)
        ? (charRule.style.color = "green")
        : (charRule.style.color = "red");
    });
    password.addEventListener("input", () => {
      numRegEx.test(password.value)
        ? (numRule.style.color = "green")
        : (numRule.style.color = "red");
    });
    password.addEventListener("input", () => {
      specRegEx.test(password.value)
        ? (specRule.style.color = "green")
        : (specRule.style.color = "red");
    });
    password.addEventListener("input", () => {
      caseRegEx.test(password.value)
        ? (caseRule.style.color = "green")
        : (caseRule.style.color = "red");
    });
  })();

  // Validation if confirm input doesnt match PW input
  (function confirmPWValidation() {
    const password = document.querySelector("#password");
    const confirmPW = document.querySelector("#confirm-pw");
    confirmPW.addEventListener("change", () => {
      if (confirmPW.value != password.value) {
        confirmPW.setCustomValidity(
          "Please make sure this is the same as the set password above"
        );
      } else {
        confirmPW.setCustomValidity("");
      }
    });
  })();
})();

// Dynamically displays PW rules & confirm PW on PW input click
const Confirmation = (() => {
  const password = document.querySelector("#password");
  const dynamicPW = document.querySelectorAll(".dynamic-pw");
  password.addEventListener("focus", () => {
    dynamicPW.forEach((li) => {
      li.style.display = "flex";
    });
  });
})();

// ValidationUtils.js
const validateServerSide = (key, value) => {
  validateAll();
};
const isEmpty = (event) => {
  const inputValue = event.target.value;
  const inputName = event.target.name;
  const isValid = inputValue.trim() !== "";
  const invalidFeedback = document.querySelector(
    `[name="${inputName}"] + .invalid-feedback`
  );

  if (inputValue === "") {
    event.target.classList.add("is-invalid");
    invalidFeedback.innerHTML = `Please enter your ${inputName.toLowerCase()}`;
  } else {
    event.target.classList.remove("is-invalid");
    invalidFeedback.innerHTML = "";
  }

  event.target.classList.toggle("is-valid", isValid);
  event.target.classList.toggle("is-invalid", !isValid);
};

const isValidEmail = (event) => {
  // Validate email format
  const inputType = event.target.type;
  const inputName = event.target.name;
  const invalidFeedback = document.querySelector(
    `[name="${inputName}"] + .invalid-feedback`
  );
  if (inputType === "email") {
    // Validate email format
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    event.target.classList.toggle("is-valid", isEmailValid);
    event.target.classList.toggle("is-invalid", !isEmailValid);
    if (!isEmailValid) {
      invalidFeedback.innerHTML = "Please enter your email";
    }
  }
};
const isValidContact = (event, max, min) => {
  const inputType = event.target.type;
  const inputName = event.target.name;
  const inputValue = event.target.value;
  const invalidFeedback = document.querySelector(
    `[name="${inputName}"] + .invalid-feedback`
  );
  const contactValid = /^\d{max}$/.test(inputValue);
  if (inputType === "number") {
    if (inputValue === "") {
      event.target.classList.add("is-invalid");
      invalidFeedback.innerHTML = `Please enter your ${inputName.toLowerCase()}`;
    } else if (inputValue.length + 1 <= max) {
      event.target.classList.add("is-invalid", !contactValid);
      invalidFeedback.innerHTML = "Contact number must be atleast 11 digits";
    } else {
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    }
  }
};
const validateAll = () => {
  const inputs = document.querySelectorAll(".form-control, .form-select");
  inputs.forEach((element) => {
    const isValid = element.value.trim() !== ""; // Use 'element' instead of 'e'
    element.classList.toggle("is-valid", isValid);
    element.classList.toggle("is-invalid", !isValid);
    const inputType = element.type;
    const inputName = element.name;
    if (inputType === "email") {
      // Validate email format
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value);
      element.classList.toggle("is-valid", isEmailValid);
      element.classList.toggle("is-invalid", !isEmailValid);
    }
    if (inputName === "contactNumber" && inputType === "number") {
      // Validate contact number format (limit to 11 digits)
      const isNumberValid = /^\d{11}$/.test(element.value);
      element.classList.toggle("is-valid", isNumberValid);
      element.classList.toggle("is-invalid", !isNumberValid);
    }
  });
};
const resetValidation = () => {
  const inputs = document.querySelectorAll(".form-control, .form-select");
  inputs.forEach((element) => {
    element.classList.remove("is-invalid", "is-valid");
  });
};

export { validateAll, resetValidation, isEmpty, isValidEmail, isValidContact };

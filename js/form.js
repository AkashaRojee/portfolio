/* global createElement, addEventListeners, removeElement, validateInputs */

const form = document.forms[0];
const submitButton = form['user-submit'];
const formInputs = [form.name, form.email, form.message];


// When user clicks Submit button, submit form if all form inputs are valid,
// Else display custom error message
submitButton.addEventListener('click', (event) => {

  removeElement(form.querySelector('span'));
  event.preventDefault(); // Prevent default form validation messages

  let invalidInput = validateInputs(formInputs);
  if (invalidInput === -1) {
    form.submit();
  } else {
    const errorMessage = [
      'Please enter your name', 
      'Email should be lower case in format user@mail.com',
      'Please enter your message'];
    let span = createElement('span', 'error', {}, errorMessage[invalidInput]);
    document.querySelector('form div').append(span);
  }
});

// When user clicks on any form input, remove error message
addEventListeners(formInputs, 'click', () => {
  removeElement(form.querySelector('span'));
});


// When user changes content in any form input, save data to local storage
addEventListeners(formInputs, 'change', () => {
  localStorage.setItem('form', JSON.stringify(
    {name : formInputs[0].value, 
    email : formInputs[1].value,
    message : formInputs[2].value}));
  }
);

//When page loads, populate form inputs with data from local storage
function populateForm() {
  if (localStorage.length > 0) {
    let formData = JSON.parse(localStorage.getItem('form'));
    formInputs.forEach(formInput => {
      formInput.value = formData[formInput.id];
    });
  }
}

window.addEventListener('load', populateForm);
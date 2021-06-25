/* eslint-disable no-unused-vars */

// Create HTML element of given type and add classes, attributes and textContent (where applicable)
function createElement(elementType, classNames = '', attributes = {}, innerHTML = '') {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
}

// Remove HTML element if it exists
function removeElement(element) {
  if (element !== null) {
    element.remove();
  }
}

// Add event listener of given type of an array of elements and set callback function
function addEventListeners(elementsArray, eventType, eventListenerFunction) {
  elementsArray.forEach((element) => {
    element.addEventListener(eventType, eventListenerFunction);
  });
}

// Check for any invalid form input from given array
// Return index of invalid form input
// Return -1 if all form inputs are valid
// Makes use of Constraint Validation API
function validateInputs(inputsArray) {
  for (let i = 0; i < inputsArray.length; i += 1) {
    if (inputsArray[i].validity.valid === false) {
      return i;
    }
  }
  return -1;
}
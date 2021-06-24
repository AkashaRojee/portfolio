const form = document.forms[0];
const email = form.elements['user-email'];
const isUpperCase = (string) => /[A-Z]/.test(string);

form.addEventListener('submit', (e) => {
  let msg = [];
  if (isUpperCase(email.value)) {
    e.preventDefault();
    msg.push('email must be in lowercase');
    console.log(msg);
  }
});

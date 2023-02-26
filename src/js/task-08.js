const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const dataForm = {};
  for (const element of loginForm.elements) {
    if (element.name) {
      dataForm[element.name] = element.value;
    }
  }
  if (dataForm.email && dataForm.password) {
    console.log(dataForm);
    loginForm.reset();
  } else {
    alert('Всі поля повинні бути заповнені');
  }
});
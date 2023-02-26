const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');


function inputChange(x) {
  textOutput.textContent = x.currentTarget.value;
  if (x.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
  }
}

textInput.addEventListener('input', inputChange);
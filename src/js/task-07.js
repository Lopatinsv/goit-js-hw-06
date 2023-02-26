const rangeIn = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = rangeIn.value + 'px';

const textResizing = () => {
  text.style.fontSize = `${rangeIn.value}px`;
};

rangeIn.addEventListener('input', textResizing);
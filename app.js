const input = document.querySelector('.input');
const output = document.querySelector('.output');
const dellete = document.querySelector('.AC');

dellete.addEventListener('click', () => {
  input.innerHTML = '';
  output.innerHTML = '';
});

document.querySelectorAll('.number').forEach((item) => {
  item.addEventListener('click', () => {
    input.innerHTML += item.innerHTML;
  });
});

let counter = 0;
//preventing the user to addmore than one point
const dote = document.querySelector('.point');
dote.addEventListener('click', () => {
  if (counter === 0) {
    input.innerHTML += dote.innerHTML;
  } else {
    return;
  }
  counter++;
  console.log(counter);
});

let state;

document.querySelectorAll('.operator').forEach((item) => {
  item.addEventListener('click', () => {
    counter = 0;
    output.innerHTML = input.innerHTML + ' ' + item.innerHTML;
    input.innerText = '';
    switch (item.innerHTML) {
      case '+':
        state = '+';
        break;
      case '-':
        state = '-';
        break;
      case '/':
        state = '/';
        break;
      case '%':
        state = '%';
        break;
      case '*':
        state = '*';
    }
    console.log(state);
  });
});

document.querySelector('.equal').addEventListener('click', () => {
  if (input.innerHTML === '') {
    return;
  } else {
    output.innerHTML += ' ' + input.innerHTML;
    switch (state) {
      case '+':
        input.innerHTML =
          parseFloat(input.innerHTML) + parseFloat(output.innerHTML);
        break;
      case '-':
        input.innerHTML =
          parseFloat(output.innerHTML) - parseFloat(input.innerHTML);
        break;
      case '/':
        input.innerHTML =
          parseFloat(output.innerHTML) / parseFloat(input.innerHTML);
        break;

      case '%':
        input.innerHTML =
          (parseFloat(output.innerHTML) * 100) / parseFloat(input.innerHTML) +
          '%';
      case '*':
        input.innerHTML =
          parseFloat(output.innerHTML) * parseFloat(input.innerHTML);
        break;
    }
  }
  state = undefined;
});

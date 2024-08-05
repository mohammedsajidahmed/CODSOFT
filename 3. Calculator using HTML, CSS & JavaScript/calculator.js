const allKeys = document.querySelectorAll('.keys');
const input = document.querySelector('input');
const equalTo = document.querySelector('.equal-to');
const allOperators = document.querySelectorAll('.operators');
let click;
let operator;
allKeys.forEach((key) =>
  key.addEventListener('click', (event) => {
    const key = event.target.innerHTML;
    if (key === '=') {
      try {
        let result = eval(input.value);
        input.value = result;
        click = true;
      } catch (err) {
        input.value = 'Invalid input';
      }
    } else if (key === '%') {
      input.value = input.value / 100;
    } else if (key === 'DEL') {
      const myArray = input.value.split('');
      myArray.splice(-1, 1);
      let string = myArray.join('');
      input.value = string;
    } else if (key === 'AC') {
      input.value = 0;
    } else {
      if (input.value === '0' && key === '.') {
        input.value = 0 + key;
      } else if (input.value === '0') {
        input.value = key;
      } else {
        input.value = input.value + key;
      }

      if (click) {
        if (
          key === '+' ||
          key === '-' ||
          key === '*' ||
          key === '/' ||
          key === '%'
        ) {
          input.value = input.value;
          click = false;
        } else if (key === '.') {
          input.value = 0 + key;
          click = false;
        } else {
          input.value = key;
          click = false;
        }
      }
    }
  })
);

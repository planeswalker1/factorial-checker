// Factorial
// A factorial is an operator that multiplies a number by all of the positive integers less than that number.
// For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.

// By definition, 0! = 1.

// Make a web page to compute factorials.

// check if argument is an integer
function isInt (num) {
  return num % 1 === 0;
}

const form = document.querySelector('form');
let factorialInput = document.querySelector('input');
const outputP = document.querySelector('.hidden');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  outputP.textContent = 'Output: ';
  let factorialInput = Number(document.querySelector('input').value);
  // console.log(factorialInput);
  // check if input is NaN or less than 0
  if (isNaN(factorialInput) || factorialInput < 0) {
    outputP.textContent = 'Please enter a number greater than or equal to 0';
    // check if input is 0
  } else if (factorialInput === 0) {
    outputP.textContent += 1;
    //  compute factorial
  } else {
    let total = 1;
    // loop counting down from input and multiply to total
    for (let i = factorialInput; i > 0; i--) {
      // console.log(i);
      total *= i;
    }
    // console.log(total);
    // check if total is an integer to limit decimal places
    if (isInt(total)) {
      outputP.textContent += total
    } else {
      outputP.textContent += total.toFixed(2);
    }
  }
  outputP.classList.remove('hidden');
});

// hide output on input focus
factorialInput.addEventListener('focus', function () {
  outputP.classList.add('hidden');
});
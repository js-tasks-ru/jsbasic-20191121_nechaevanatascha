/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let m = prompt('Enter value', '');
let n = prompt('Enter power', '');

alert(pow(m, n));

function pow(m, n) {
  if (n < 1 || !isInteger(n)) {
    alert('Incorrect power entered');
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= m;
  }
  return result;
}

function isInteger(num) {
  return (num ^ 0) === num;
}

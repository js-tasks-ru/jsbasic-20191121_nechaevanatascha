/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.replace(/,/g, ' ').split(' ');
  let user = {};
  user.min = getMin(arr);
  user.max = getMax(arr);

  //user = `Object({ min: ${min}, max: ${max} })`;
  return user;
}

function getMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < min) {
      min = arr[i];
    }
  }
  return min;
}

function getMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > max) {
      max = arr[i];
    }
  }
  return max;
}

const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

getMinMax(inputData);

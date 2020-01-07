/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.replace(/,/g, ' ').split(' ');
  let min = Infinity;
  let max = -Infinity;
  arr.forEach((index, i, arr) => {
    min = Number(arr[i]) < min ? Number(arr[i]) : min;
    max = Number(arr[i]) > max ? Number(arr[i]) : max;
  });
  const user = {
    min: min,
    max: max,
  };
  return user;
}


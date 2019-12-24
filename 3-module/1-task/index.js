/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let userRes = data.filter(user => user.age <= age);
  let result = '';
  userRes.forEach(function addToString(element) {
    //result = result + element.name + ', ' + element.balance + '\n';
    result = `${result + element.name}, ${element.balance}\n`;
  });
  return result.slice(0, result.length - 1);
}

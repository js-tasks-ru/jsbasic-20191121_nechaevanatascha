/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let cloned = {};
  for (let key in obj) {
    if (typeof (obj[key]) == 'object' && obj[key] != null) {
      cloned[key] = clone(obj[key]);
    } else {
      cloned[key] = obj[key];
    }
    return cloned;
  }
}



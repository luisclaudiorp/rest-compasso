module.exports = function regex(obj) {
  for (var [key, value] of Object.entries(obj)) {
    obj[key] = new RegExp(obj[key]);
    return obj;
  }
};

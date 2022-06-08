const ftoc = function (arg1) {
  return Math.round(10 * (arg1 - 32) * 5 / 9) / 10.0
};

const ctof = function (arg1) {
  return Math.round(10 * (arg1 * 9 / 5 + 32)) / 10.0
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

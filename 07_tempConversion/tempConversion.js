const ftoc = function(f) {
  let celsius = (f - 32) * 5/9
  return parseFloat(celsius.toFixed(1))
};

const ctof = function(c) {
  let fahren = c * 9/5 + 32
  return parseFloat(fahren.toFixed(1))
};


console.log(ftoc(32))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

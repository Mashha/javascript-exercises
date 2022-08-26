const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let total = 0;
	for(let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
};



const multiply = function(arr) {
  let total = 1;
	for(let i = 0; i < arr.length; i++) {
     total *= arr[i]
  }
  return total
};

//console.log(multiply([2,4]))

const power = function(a,b) {
	return Math.pow(a,b)
};
//console.log(power(2,3))


const factorial = function(num) {
	if(num === 0) {
    return 1
  } else {
    return num * factorial(num -1)

  }
  
};
//console.log(factorial(0))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

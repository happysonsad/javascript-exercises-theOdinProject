const add = function(a, b) {
	return a + b;
};
//npm test calculator.spec.js
const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, currentItem) => total + currentItem, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem, 1)
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }
  
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

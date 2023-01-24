const add = function(...numbers) {

  let sum = 0;
  for (const num of numbers) {
    sum +=num;
  }

  return sum;
  
};

const subtract = function(firstNum,...numbers) {
  
  let total = firstNum;
  for (const num of numbers) {
    total = total - num;
  }

  return total;
	
};

const sum = function(array) {

  let sum = 0;
  for (const num of array) {
    sum += num;
  }

  return sum;
	
};

const multiply = function(array) {

  let total = 1;
  for (const num of array) {
    total = total * num;
  }

  return total;

};

const power = function(baseNum, exponent) {

  return Math.pow(baseNum, exponent);
	
};

const factorial = function(number) {

  let total = number;

  if (total !== 0) {
    for (let i = (number - 1); i > 0; i--) {
      total = total * i;
    }
  } else {
    total = 1;
  }

  return total;
	
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

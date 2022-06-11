const add = function(valueOne, valueTwo) {
	// two parameters (or more..) are passed in, added and returned
  return valueOne + valueTwo;
};

const subtract = function(valueOne, valueTwo) {
	return valueOne - valueTwo;
};

const sum = function(listToSum) {

  let sum = 0;

	for (let i = 0; i < listToSum.length; i++) {
    sum += listToSum[i];
  }

  return sum;
};

const multiply = function(listToMultiply) {

  let sum;
  // for each number in the list, multiply it by the previous number
  for (let i = 0; i < listToMultiply.length; i++) {
    if (i === 0) {
      sum = listToMultiply[i];
    } else {
      sum *= listToMultiply[i];
    }
  }
  return sum;

};

const power = function(baseNumber, raisedExponent) {
	
  // times baseNumber by itself raisedExponent times
  return Math.pow(baseNumber, raisedExponent);

};

const factorial = function(factorialInput) {
	// factorial n! ex: 4! = 4 * 3 * 2 * 1 = 24
  // 0! = 1
  if (factorialInput < 0) {
    return -1;
  } else if (factorialInput === 0) {
    return 1;
  } else {
    return (factorialInput * factorial(factorialInput - 1));
  }



  // let result;
  // while (factorialInput > 0) {
  //   result = factorialInput * (factorialInput - 1);
  //   factorialInput--;
  // }
  // return result;

};

const operate = function(operator, valueOne, valueTwo) {
    // takes an operator and two numbers, then calls one of 
    // the math functions (add, subtract, etc..) on the numbers

    let result;

    switch (operator) {

        case '+':
            return result = add(valueOne, valueTwo);
            break;
    
        case '-':
            return result = subtract(valueOne, valueTwo);
            break;

        // case '*':
        //     return result = multiply(values);
        //     break;

        // case '/':
        //     return result = divide(valueOne, valueTwo);
        //     break;

        default:
            break;
    }
};

// Unit Testing
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };

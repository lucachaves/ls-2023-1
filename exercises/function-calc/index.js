function calc(number1, number2, operator) {
  return eval(number1 + operator + number2);
}

console.log(calc(1, 1, '+'));
console.log(calc(1, 1, '-'));
console.log(calc(1, 1, '*'));
console.log(calc(1, 1, '/'));

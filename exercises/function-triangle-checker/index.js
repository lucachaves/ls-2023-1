function triangleCheck(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
      return 'equilateral';
    } else if (a === b || b === c || a === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  } else {
    return 'none';
  }
}

console.log(triangleCheck(2, 2, 2)); //	equilateral
console.log(triangleCheck(10, 10, 10)); //	equilateral
console.log(triangleCheck(3, 4, 4)); //	isosceles
console.log(triangleCheck(4, 3, 4)); //	isosceles
console.log(triangleCheck(4, 4, 3)); //	isosceles
console.log(triangleCheck(10, 10, 2)); //	isosceles
console.log(triangleCheck(3, 4, 5)); //	scalene
console.log(triangleCheck(10, 11, 12)); //	scalene
console.log(triangleCheck(5, 4, 2)); //	scalene
console.log(triangleCheck(0, 0, 0)); //	none
console.log(triangleCheck(3, 4, -5)); //	none
console.log(triangleCheck(1, 1, 3)); //	none
console.log(triangleCheck(2, 4, 2)); //	none

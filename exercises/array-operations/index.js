// https://ifpb.github.io/exercises/problems/algorithms/array-operations/
// sumOdds	(1, 2, 3)	4
// sumOdds	(2, 2, 2)	0
// sumOdds	(1, 2, 3, 4, 5, 6)	9
// product	(1, 2, 3)	6
// product	(2, 2, 2)	8
// product	(1, 2, 3, 4, 5, 6)	720

function sum(...values) {
  // let total = 0;

  // for (const value of values) {
  //   total += value;
  // }

  // return total;
  return values.reduce((acc, value) => acc + value, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 2, 2)); // 6
console.log(sum(1, 2, 3, 4, 5, 6)); // 21

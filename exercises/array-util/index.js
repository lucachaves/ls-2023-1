function zip(...values) {
  let result = [];

  for (const index in values[0]) {
    let array = [];

    for (const value of values) {
      array.push(value[index]);
    }

    result.push(array);
  }

  return result;
}

let result = zip(['moe', 'larry'], [30, 40]);

console.log(JSON.stringify(result, null, 2)); // [[moe, 30], [larry, 40]]

result = zip(['moe', 'larry', 'alice'], [30, 40, 50]);

console.log(JSON.stringify(result, null, 2)); // [[moe, 30], [larry, 40]]

result = zip(
  ['moe', 'larry', 'alice'],
  [30, 40, 50],
  ['moe@email.com', 'larry@email.com', 'alice@email.com']
);

console.log(JSON.stringify(result, null, 2)); // [[moe, 30], [larry, 40]]

function sumSync(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('Invalid values');
  }
}

function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject(new Error('Invalid values'));
    }
  });
}

console.log(sumSync(1, 2));
console.log(sumPromise(1, 2));
console.log(sumPromise(1, 3));
console.log(sumSync(1, 4));

sumPromise(1, 5)
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

// console.log(sumSync(1, 'a'));
sumPromise(1, 'a')
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

sumPromise(1, 6)
  .then((value) => sumPromise(value, 1))
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

async function sumAsync(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('Invalid values');
  }
}

console.log(sumAsync(1, 9));

const result = sumAsync(1, 9);

console.log(result);

sumAsync(1, 10)
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

try {
  const result2 = await sumAsync(1, 11);

  console.log(result2);
} catch (error) {
  console.log(error.message);
}

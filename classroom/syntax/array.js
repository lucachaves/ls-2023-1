// create array with values
const values = [1, 2, 3];

console.log(values);

// create empty array
const numbers = [];

// adding/changing values
numbers.push(1);

console.log(numbers);

numbers.unshift(0);

console.log(numbers);

numbers[2] = 2;

console.log(numbers); // [0, 1, 2]

numbers.push(3); // [0, 1, 2] <=

numbers.unshift(-1); // => [0, 1, 2, 3]

console.log(numbers); // [-1, 0, 1, 2, 3]

// multiple types
const person = ['John', 30, true, ['john@email.com']];

// destructuring arrays
// const name = person[0];
// const age = person[1];
// const [name, age] = person;
const [_, age] = person;
const [, , , [email]] = person;

// React
// const [name, setName] = useState('');

console.log(age);

// spread operator
const student = [...person, 'TSI'];

// iteration
const integers = [10, 20, 30];

for (let flag = 0; flag < integers.length; flag++) {
  console.log(integers[flag]);
}

for (const index in integers) { // [0, 1, 2]
  console.log(integers[index]);
}

for (const number of numbers) { // [10, 20, 30]
  console.log(number);
}

// Object Array

// Property: length

// Mutator: push(), unshift(), pop(), shift(), reverse(), sort(), splice()

// Accessor: includes(), join(), slice()

// Iteration: map(), filter(), reduce(), every(), some()

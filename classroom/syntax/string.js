// String ', ", `
let text;

text = 'Hello';
// text = "Hello";
text = `Hello`;

// Concat
console.log(1 + '1'); // 11
console.log(1 + Number('1')); // 2

const name = 'John';
const email = 'john@email.com';
const phone = '083999999999';

console.log(
  '<tr><td>' + name + '</td><td>' + email + '</td><td>' + phone + '</td></tr>'
);

// Template literals / Template strings
// multi-line strings
// string interpolation
console.log(`<tr>
  <td>${name}</td>
  <td>${email}</td>
  <td>${phone}</td>
</tr>`);

// Array of characthers
text = 'Hello';

console.log(text[0]); // H

text[0] = 'h';

console.log(text);

// Object String

// String.length
text = 'Hello';

console.log(text.length);

// String.padStrat
let result = '';

for (let flag = 0; flag < 100; flag++) {
  result += String(flag).padStart(3, '0');
  result += flag % 10 === 9 ? '\n' : ', ';
}

console.log(result);

// String.split / Array.join
text = 'Hello World';

console.log(text.split(' '));

const names = ['Hello', 'World'];

console.log(names.join(' '));

// String.toLowerCase
text = 'HELLO';

console.log(text.toLowerCase());

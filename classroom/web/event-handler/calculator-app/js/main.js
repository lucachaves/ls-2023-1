// https://tailwindcss.com/docs/guides/vite
import '../css/index.css';

import { sum } from './lib.js';

const form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();

  const value1 = Number(document.querySelector('#value-1').value);
  const value2 = Number(document.querySelector('#value-2').value);

  result.value = sum(value1, value2);
};

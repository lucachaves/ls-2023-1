import {
  Datepicker,
  Dropdown,
  Input,
  Offcanvas,
  Ripple,
  Select,
  initTE,
} from 'tw-elements';
import { formatCurrency, formatDate } from './utils.js';
import { investiments } from './investiments.js';
import '../css/style.css';

function investimentCard(investiment) {
  return `<div class="bg-white shadow-md rounded-lg p-4">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold text-gray-700">
        ${investiment.name}
      </h3>
      <p class="text-lg font-semibold text-gray-700">${formatCurrency(
        investiment.value
      )}</p>
    </div>
    <div class="mt-4">
      <p class="text-sm text-gray-500">
        <span class="font-bold">Origem:</span> ${investiment.origin}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Categoria:</span> ${investiment.category}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Data:</span> ${formatDate(investiment.date)}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Taxa:</span> ${investiment.interest}
      </p>
    </div>
  </div>`;
}

function insertInvestimentCard(investiment) {
  const investimentsGrid = document.querySelector('.investiments');

  const view = investimentCard(investiment);

  investimentsGrid.insertAdjacentHTML('beforeend', view);
}

function submitHandler(event) {
  event.preventDefault();

  const form = document.querySelector('form');

  const investiment = Object.fromEntries(new FormData(form));

  investiment.value = Number(investiment.value.replace(',', '.'));

  console.log(investiment);

  insertInvestimentCard(investiment);

  form.reset();

  document.querySelector('button[data-te-offcanvas-dismiss]').click();
}

window.submitHandler = submitHandler;

initTE({
  Datepicker,
  Dropdown,
  Input,
  Offcanvas,
  Ripple,
  Select,
});

investiments.forEach((investiment) => insertInvestimentCard(investiment));

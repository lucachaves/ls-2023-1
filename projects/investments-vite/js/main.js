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
import { investments } from './investments.js';
import '../css/style.css';

function investmentCard(investment) {
  return `<div class="bg-white shadow-md rounded-lg p-4">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold text-gray-700">
        ${investment.name}
      </h3>
      <p class="text-lg font-semibold text-gray-700">${formatCurrency(
        investment.value
      )}</p>
    </div>
    <div class="mt-4">
      <p class="text-sm text-gray-500">
        <span class="font-bold">Origem:</span> ${investment.origin}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Categoria:</span> ${investment.category}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Data:</span> ${formatDate(investment.date)}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Taxa:</span> ${investment.interest}
      </p>
    </div>
  </div>`;
}

function insertInvestmentCard(investment) {
  const investmentsGrid = document.querySelector('.investments');

  const view = investmentCard(investment);

  investmentsGrid.insertAdjacentHTML('beforeend', view);
}

function submitHandler(event) {
  event.preventDefault();

  const form = document.querySelector('form');

  const investment = Object.fromEntries(new FormData(form));

  investment.value = Number(investment.value.replace(',', '.'));

  console.log(investment);

  insertInvestmentCard(investment);

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

investments.forEach((investment) => insertInvestmentCard(investment));

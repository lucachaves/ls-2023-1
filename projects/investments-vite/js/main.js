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
import API from './api.js';

import '../css/style.css';

function investmentCard(investment) {
  return `
  <div
    id="investment-${investment.id}"
    class="bg-white shadow-md rounded-lg p-4"
  >
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold text-gray-700">
        ${investment.name}
      </h3>
      <p class="text-lg font-semibold text-gray-700">
        ${formatCurrency(investment.value)}
      </p>
    </div>
    <div class="mt-4">
      <p class="text-sm text-gray-500">
        <span class="font-bold">Origem:</span>
        ${investment.origin}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Categoria:</span>
        ${investment.category}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Data:</span>
        ${formatDate(investment.created_at)}
      </p>
      <p class="text-sm text-gray-500">
        <span class="font-bold">Taxa:</span>
        ${investment.interest}
      </p>
    </div>
  </div>`;
}

function insertInvestmentCard(investment) {
  const investmentsGrid = document.querySelector('.investments');

  const view = investmentCard(investment);

  investmentsGrid.insertAdjacentHTML('beforeend', view);
}

async function submitHandler(event) {
  event.preventDefault();

  const form = document.querySelector('form');

  const investment = Object.fromEntries(new FormData(form));

  investment.value = Number(investment.value.replace(',', '.'));

  investment.created_at = investment.created_at.split('/').reverse().join('-');

  // console.log(investment);

  const newInvestment = await API.create('investments', investment);

  insertInvestmentCard(newInvestment);

  form.reset();

  document.querySelector('button[data-te-offcanvas-dismiss]').click();
}

async function loadCategoryOptions() {
  const categories = await API.readAll('categories');

  categories.forEach((category) => {
    const option = document.createElement('option');

    option.value = category.id;
    option.textContent = category.name;

    document.querySelector('#category_id').appendChild(option);
  });
}

async function loadInvestments() {
  const investments = (await API.readAll('investments')).map((investment) => ({
    ...investment,
    category: investment.categories.name,
  }));

  const investmentsGrid = document.querySelector('.investments');

  investmentsGrid.innerHTML = '';

  investments.forEach((investment) => insertInvestmentCard(investment));
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

loadCategoryOptions();

loadInvestments();

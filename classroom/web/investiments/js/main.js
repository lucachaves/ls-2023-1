import { formatCurrency, formatDate } from './utils.js';

const investments = [
  {
    name: 'Tesouro Selic 2029',
    value: 100.5,
    origin: 'Tesouro Nacional',
    category: 'Pos',
    date: '2023-03-22',
    interest: '100% Selic',
  },
  {
    name: 'Tesouro IPCA 2029',
    value: 100,
    origin: 'Tesouro Nacional',
    category: 'IPCA',
    date: '2023-03-22',
    interest: 'IPCA + 5,83%',
  },
  {
    name: 'Tesouro IPCA 2045',
    value: 100,
    origin: 'Tesouro Nacional',
    category: 'IPCA',
    date: '2045-03-22',
    interest: 'IPCA + 5,83%',
  },
];

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

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = investments
  .map((investment) => investmentCard(investment))
  .join('');

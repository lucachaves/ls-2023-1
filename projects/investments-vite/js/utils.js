export function formatCurrency(currency) {
  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatDate(date) {
  date = date.split('/').reverse().join('-');
  return new Date(date).toLocaleDateString('pt-BR');
}

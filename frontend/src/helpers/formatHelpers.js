const formatter = Intl.NumberFormat('pt-BR');
function formatNumber(value) {
  return formatter.format(value) + ' votos';
}

function formatPercentage(value) {
  const stringValue = value.toFixed(2);
  return stringValue.replace('.', ',') + '%';
}

export { formatNumber, formatPercentage };

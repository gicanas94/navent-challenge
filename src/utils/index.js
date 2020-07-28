// eslint-disable-next-line import/prefer-default-export
export const formatNumberToCurrency = (number, currency) =>
  Number(number).toLocaleString('es-AR', {
    currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
    style: 'currency',
  });

const toCurrency  = (quantity) => {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
  return formatter.format(quantity);
}

export {
  toCurrency
}

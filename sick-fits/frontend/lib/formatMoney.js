export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  // check if amount ends in 00
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
    console.log(true);
  }

  const formatter = new Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}

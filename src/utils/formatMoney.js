const formatter = Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}

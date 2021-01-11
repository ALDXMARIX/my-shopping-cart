export default function formatCurrency(num) {

  return "$" + Number(Number(num).toFixed(1)).toLocaleString() + " ";
}
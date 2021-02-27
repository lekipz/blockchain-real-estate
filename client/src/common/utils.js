export function formatEth(ethPrice) {
  return ethPrice.toLocaleString('fr', {
    maximumFractionDigits: 3,
    minimumFractionDigits: 3
  });
}

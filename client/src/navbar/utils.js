export function formatEth(contractBalance) {
    return contractBalance.toLocaleString('fr', {
        maximumFractionDigits: 3,
        minimumFractionDigits: 3
    });
}

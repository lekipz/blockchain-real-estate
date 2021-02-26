export function formatEth(contractBalance) {
    return parseFloat(contractBalance).toLocaleString('fr', {
        maximumFractionDigits: 3,
        minimumFractionDigits: 3
    });
}

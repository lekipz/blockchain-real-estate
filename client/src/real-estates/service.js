export function fetchTokenMetadata(hash) {
  return fetch(`https://dweb.link/ipfs/${hash}`)
    .then(res => res.json());
}

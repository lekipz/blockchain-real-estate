const PINATA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3N2FkMjQ0My1iZGVhLTQzOTgtYTA1Mi0yZjI3MmVmNDVlYjgiLCJlbWFpbCI6ImNvcmVudGluLmRlbGFubm95QHN1cGluZm8uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZX0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImYwMzZkNjNlNDEyZDBmY2YxZDg0Iiwic2NvcGVkS2V5U2VjcmV0IjoiYzcyYjI4ZDZlMmI2MjZiN2QyYTY2NTY2YmQ3NjViNTNkOGJkMTkyNDMxODZiY2JkMzIyMGI5M2I0MjYzZjJmZSIsImlhdCI6MTYxNDEwMDk2Nn0.PiLr00Cvi7I6LkfLosJhQYDhA1Puh4gZo0Gx4uyuJg4';

export async function pinToIPFS(file) {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const body = new FormData();
  body.append('file', file);

  const response = await fetch(url, {
    method: 'POST',
    body,
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`
    }
  });
  const json = await response.json();
  return json.IpfsHash;
}

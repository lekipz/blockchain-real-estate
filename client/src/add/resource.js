import { pinToIPFS } from '../ipfs';

export async function uploadMetadataFile(metadataAndFiles) {
  const pictureHashes = await Promise.all(metadataAndFiles.files.map(file => pinToIPFS(file)));
  const metadata = JSON.stringify({
    name: metadataAndFiles.name,
    description: metadataAndFiles.description,
    images: pictureHashes,
    address: metadataAndFiles.address,
    price: metadataAndFiles.price
  });
  return await pinToIPFS(new Blob([metadata], { type: 'application/json' }));
}

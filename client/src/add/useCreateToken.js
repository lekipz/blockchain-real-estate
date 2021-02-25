import { useDrizzle } from '../drizzle';
import { useCacheSend } from '../drizzle/utils/useCacheSend';
import { uploadMetadataFile } from './resource';
import { useState } from 'react';

export function useCreateToken() {
  const { drizzle, drizzleState } = useDrizzle();
  const [uploadStatus, setUploadStatus] = useState('idle');
  const {
    sendTransaction: mint,
    status: mintingStatus
  } = useCacheSend('mint');

  const createToken = async (values) => {
    setUploadStatus('pending');
    const metadataHash = await uploadMetadataFile({
      ...values,
      files: values.picturesData.map(({ blob }) => blob)
    });

    mint(metadataHash, drizzle.web3.utils.toWei(values.ethPrice), { from: drizzleState.accounts[0] });
  };

  return {
    createToken,
    creationStatus: mintingStatus ?? uploadStatus
  };
}

import { useEffect, useState } from 'react';
import Button from '../common/ui/Button';
import { useContractBalance } from './useContractBalance';
import { formatEth } from './utils';
import { useCacheSend } from '../drizzle/utils/useCacheSend';

const getButtonLabel = (contractBalance, isLoading, isSuccess) => {
  return contractBalance == null ?
    'Chargement...' :
    contractBalance === 0 ?
      'Pas de fond à collecter' :
      isLoading ?
        'Collecte en cours...' :
        isSuccess ?
          'Collecte terminée !' :
          `Collecter commissions (${(formatEth(contractBalance))} ETH)`;
};

export default function CommissionButton() {
  const contractBalance = useContractBalance();
  const { sendTransaction: withdrawCommissions, status } = useCacheSend('withdrawCommissions');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  useEffect(() => {
    if (status === 'success') {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000);
    }
  }, [status]);

  const handleClick = () => {
    withdrawCommissions();
  };
  const disabled = !contractBalance || status === 'pending';

  return (
    <Button type="button" onClick={handleClick} disabled={disabled}>
      {getButtonLabel(contractBalance, status === 'pending', showSuccessMessage)}
    </Button>
  );
}

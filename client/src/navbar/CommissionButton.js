import { useEffect, useState } from 'react';
import Button from '../common/ui/Button';
import { useContractBalance } from './useContractBalance';
import { formatEth } from '../common/utils';
import { useCacheSend } from '../drizzle/utils/useCacheSend';

const getButtonLabel = (contractBalance, isLoading, isSuccess) => {
  if (isSuccess) {
    return 'Collecte terminée !';
  }
  if (isLoading) {
    return 'Collecte en cours...';
  }
  if (contractBalance == null) {
    return 'Chargement...';
  }
  if (contractBalance === 0) {
    return 'Pas de fond à collecter';
  }
  return `Collecter commissions (${(formatEth(contractBalance))} ETH)`;
};

export default function CommissionButton() {
  const [contractBalance, refetch] = useContractBalance();
  const { sendTransaction: withdrawCommission, status } = useCacheSend('withdrawCommission');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  useEffect(() => {
    if (status === 'success') {
      refetch();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  }, [status]);

  const disabled = !contractBalance || status === 'pending';
  const handleClick = () => {
    if (!disabled) {
      withdrawCommission();
    }
  };

  return (
    <Button type="button" onClick={handleClick} disabled={disabled}>
      {getButtonLabel(contractBalance, status === 'pending', showSuccessMessage)}
    </Button>
  );
}

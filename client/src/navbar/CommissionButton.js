import Button from '../common/ui/Button';
import { useContractBalance } from './useContractBalance';
import { formatEth } from './utils';

export default function CommissionButton() {
  const contractBalance = useContractBalance();


  return (
    <Button type="button">
      {contractBalance === null ?
        'Chargement...' :
        contractBalance > 0 ?
          `Collecter commissions (${(formatEth(contractBalance))} ETH)` :
          'Pas de fond à collecter'
      }
    </Button>
  );
}

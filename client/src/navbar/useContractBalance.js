import { useDrizzle } from '../drizzle';
import { useState, useEffect } from 'react';

export function useContractBalance() {
  const { drizzle } = useDrizzle();
  const [balance, setBalance] = useState(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched || balance === null) {
      drizzle.web3.eth.getBalance(drizzle.contracts.SupRealEstate.address)
        .then(balance => {
          setBalance(balance);
          setFetched(true);
        });
    }
  }, [balance, fetched, drizzle.contracts.SupRealEstate.address, drizzle.web3.eth]);
  const refetch = () => void setFetched(false);

  if (fetched) {
    return [parseFloat(drizzle.web3.utils.fromWei(balance)), refetch];
  }
  return [null, refetch];
}

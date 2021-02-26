import { useDrizzle } from '../drizzle';
import { useState, useEffect } from 'react';

export function useContractBalance() {
  const { drizzle } = useDrizzle();
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    if (balance === null) {
      drizzle.web3.eth.getBalance(drizzle.contracts.SupRealEstate.address)
        .then(balance => setBalance(balance))
    }
  }, [balance]);

  if (balance) {
    return drizzle.web3.utils.fromWei(balance);
  }
  return balance;
}

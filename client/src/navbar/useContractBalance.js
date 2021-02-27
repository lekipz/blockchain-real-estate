import { useDrizzle } from '../drizzle';
import { useState, useEffect } from 'react';

export function useContractBalance() {
  const { drizzle, drizzleState } = useDrizzle();
  const [balance, setBalance] = useState(null);
  useEffect(() => {
    if (balance === null) {
      drizzle.web3.eth.getBalance(drizzle.contracts.SupRealEstate.address)
        .then(balance => setBalance(balance))
    }
  }, [balance, drizzleState]);

  if (balance) {
    return drizzle.web3.utils.fromWei(balance);
  }
  return balance;
}
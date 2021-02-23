import { useDrizzle } from '../index';
import { useEffect, useState, useRef } from 'react';

export function useCacheSend(method) {
  const { initialized, drizzle, drizzleState } = useDrizzle();
  const [stackId, setStackId] = useState(null);
  const [called, setCalled] = useState(false);
  const methodParams = useRef([]);

  useEffect(() => {
    if (initialized && called) {
      setStackId(drizzle.contracts.RealEstate.methods[method].cacheSend(...methodParams.current));
    }
  }, [initialized, called, method, drizzle.contracts.RealEstate.methods]);

  const sendTransaction = (...params) => {
    methodParams.current = params.slice();
    setCalled(true);
  };
  const txHash = drizzleState.transactionStack[stackId];
  return {
    sendTransaction,
    txHash,
    status: txHash ? drizzleState.transactions[txHash]?.status ?? null : null
  };
}

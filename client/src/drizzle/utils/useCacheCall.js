import { useDrizzle } from '../index';
import { useEffect, useState } from 'react';

export function useCacheCall(method) {
  const { initialized, drizzle, drizzleState } = useDrizzle();
  const [dataKey, setDataKey] = useState(null);
  useEffect(() => {
    if (initialized) {
      setDataKey(drizzle.contracts.RealEstate.methods[method].cacheCall());
    }
  }, [initialized]);
  return drizzleState.contracts.RealEstate[method][dataKey]?.value ?? null;
}

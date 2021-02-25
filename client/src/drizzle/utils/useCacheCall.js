import { useDrizzle } from '../index';
import { useEffect, useState } from 'react';

export function useCacheCall(method, ...params) {
  const { initialized, drizzle, drizzleState } = useDrizzle();
  const [dataKey, setDataKey] = useState(null);
  useEffect(() => {
    if (initialized) {
      setDataKey(drizzle.contracts.RealEstate.methods[method].cacheCall(...params));
    }
  }, [initialized, drizzle.contracts.RealEstate.methods]);
  return drizzleState.contracts.RealEstate[method][dataKey]?.value ?? null;
}

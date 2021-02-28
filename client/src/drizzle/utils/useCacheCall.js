import { useDrizzle } from '../index';
import { useEffect, useState } from 'react';

export function useCacheCall(method, ...params) {
  const { initialized, drizzle, drizzleState } = useDrizzle();
  const [dataKey, setDataKey] = useState(null);
  useEffect(() => {
    if (initialized) {
      setDataKey(drizzle.contracts.SupRealEstate.methods[method].cacheCall(...params));
    }
  }, [initialized, method, JSON.stringify(params)]);
  return drizzleState.contracts.SupRealEstate[method][dataKey]?.value ?? null;
}

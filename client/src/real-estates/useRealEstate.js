import { useContext, useMemo } from 'react';
import { RealEstatesContext } from './context';

// Returns a real estate by its `tokenId` or `null` if it is still loading.
export function useRealEstate(tokenId) {
  const realEstates = useContext(RealEstatesContext);
  return useMemo(() => realEstates?.find(token => token.tokenId === tokenId) ?? null, [tokenId, realEstates]);
}

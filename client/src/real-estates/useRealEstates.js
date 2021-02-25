import { useContext } from 'react';
import { RealEstatesContext } from './context';

// Returns all cached real estates or `null` if loading has not began.
export function useRealEstates() {
  return useContext(RealEstatesContext);
}

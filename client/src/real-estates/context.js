import { createContext } from 'react';
import { useLoadRealEstates } from './useLoadRealEstates';

export const RealEstatesContext = createContext(null);

export default function RealEstatesProvider({ children }) {
  const loadedRealEstates = useLoadRealEstates();

  return (
    <RealEstatesContext.Provider value={loadedRealEstates}>
      {children}
    </RealEstatesContext.Provider>
  );
}

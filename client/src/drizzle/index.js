import { Drizzle } from '@drizzle/store';
import { createContext, useContext, useEffect, useState } from 'react';
import SupRealEstate from '../contracts/SupRealEstate.json';

const drizzle = new Drizzle({
  contracts: [
    SupRealEstate
  ],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545'
    }
  }
})

const DrizzleContext = createContext(null);

const DrizzleProvider = ({ children }) => {
  const [drizzleState, setDrizzleState] = useState(drizzle.store.getState());
  useEffect(() => {
    return drizzle.store.subscribe(() =>
      setDrizzleState(drizzle.store.getState())
    );
  }, []);
  const initialized = drizzleState.drizzleStatus.initialized;

  return (
    <DrizzleContext.Provider value={{
      drizzle,
      drizzleState,
      initialized
    }}>
      {children}
    </DrizzleContext.Provider>
  );
};

export default DrizzleProvider;
export const useDrizzle = () => {
  const context = useContext(DrizzleContext);
  return {
    drizzle: context.drizzle,
    drizzleState: context.drizzleState,
    initialized: context.initialized,
  }
};

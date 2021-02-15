import { Drizzle } from '@drizzle/store';
import { DrizzleContext } from '@drizzle/react-plugin';
import { useContext } from 'react';

const drizzle = new Drizzle({
  contracts: [
    // Contracts go here
  ],
  web3: {
    fallback: {
      type: 'ws',
      url: '127.0.0.1:7545'
    }
  }
});

const DrizzleProvider = ({ children }) => (
  <DrizzleContext.Provider drizzle={drizzle}>
    {children}
  </DrizzleContext.Provider>
);

export default DrizzleProvider;
export const useDrizzle = () => useContext(DrizzleContext);

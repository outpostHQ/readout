import { createContext, ReactNode, useContext } from 'react';
import ConfigContext from './ConfigContext';

const DomainContext = createContext({});

function DomainProvider({ children }: { children: ReactNode }) {
  const [{ customDomain }] = useContext(ConfigContext);
  return <DomainContext.Provider value={{ customDomain }}>{children}</DomainContext.Provider>;
}

export function useCustomDomain() {
  const [{ customDomain }] = useContext(ConfigContext);
  return customDomain;
}

export default DomainProvider;

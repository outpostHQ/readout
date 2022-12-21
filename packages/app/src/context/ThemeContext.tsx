import { createContext, ReactNode } from 'react';

export const ThemeContext = createContext({});

function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;

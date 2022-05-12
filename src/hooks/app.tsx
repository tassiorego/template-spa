import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { defaultTheme } from '../themes';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }:AppProviderProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

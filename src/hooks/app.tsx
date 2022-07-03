import React from 'react';

import '../styles/global.css';
import { AuthProvider } from './auth';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

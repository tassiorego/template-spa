import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface Credentials {
  email: string;
  password: string;
  originHost: string;
}
interface AuthContextData {
  user: User;
  token: string | null;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface User {
  name: string;
  email: string;
  phone?: string;
  skype?: string;
  avatar_url: string;
  id: string;
}

interface AuthState {
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProvideProps {
  children: React.ReactNode;
}

function AuthProvider({ children }:AuthProvideProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Auth@token');
    const user = localStorage.getItem('Auth@user');

    if (token && user) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password, originHost }: any) => {
    const response = await api.post(
      '/sessions',
      { email, password },
      { headers: { 'x-origin-host': originHost } },
    );

    const { user, token } = response.data;

    localStorage.setItem('Auth@token', token);
    localStorage.setItem('Auth@user', JSON.stringify(user));

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('Auth@token');
    localStorage.removeItem('Auth@user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback((user: User) => {
    setData((state) => ({
      ...state,
      user,
    }));

    localStorage.setItem('Auth@user', JSON.stringify(user));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

import {createContext, useState, useContext, useEffect} from 'react';
import {User} from '../domain/models/user';
import React from 'react';
import {useAuth} from '../hooks/useAuth';

interface AuthContextProps {
  user: User | null;
  loginStatus: 'unknown' | 'logged' | 'unlogged';
}

const AuthContext = createContext({} as AuthContextProps);

export const useAuthContext = () => useContext(AuthContext);

interface AuthProviderProps {
  children: JSX.Element;
}

export default function AuthProvider({
  children,
}: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [loginStatus, setLoginStatus] = useState<
    'unknown' | 'logged' | 'unlogged'
  >('unknown');
  const {onUserChanged} = useAuth();

  useEffect(() => {
    onUserChanged(userChanged => {
      console.log("User changed? -> ", userChanged);
      if (userChanged) {
        console.log("Logged")
      }
      setLoginStatus(userChanged ? 'logged' : 'unlogged');
      console.log("Login status", loginStatus);
      setUser(userChanged);
    });
  }, [onUserChanged]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginStatus,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

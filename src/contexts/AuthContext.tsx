import {createContext, useState, useContext, useCallback} from 'react';
import {User} from '../domain/models/user';
import React from 'react';

interface AuthContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const AuthContext = createContext(
  {} as AuthContextProps,
);

export const useAuthContext = () =>
  useContext(AuthContext);

interface AuthProviderProps {
  children: JSX.Element;
}

export default function AuthProvider({
  children,
}: AuthProviderProps): JSX.Element {
  
  const [user, setUser] = useState<User>({} as User);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}>
      {children}
    </AuthContext.Provider>
  );
}

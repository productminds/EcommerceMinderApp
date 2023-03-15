import {useCallback, useMemo, useState} from 'react';
import { User } from '../domain/models/user';
import { GoogleService } from '../services/firebase.google.service';

export const useAuth = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const google_service = new GoogleService();

  const googleSignIn = useCallback(async (): Promise<User> => {

    setLoading(true);

    const result = await google_service.signin().finally(() => setLoading(false));

    setUser(result);

    return result;

  }, [google_service]);


  return {
    user,
    loading,
    googleSignIn,
  };
};
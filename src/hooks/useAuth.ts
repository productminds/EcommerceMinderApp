import {useCallback, useMemo, useState} from 'react';
import {User} from '../domain/models/user';
import {AuthService} from '../services/firebase.auth.service';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const authService = useMemo(() => new AuthService(), []);

  const signIn = useCallback(async (email: string, password: string): Promise<User> => {
    setLoading(true);

    const result = await authService
      .signin(email, password)
      .catch(err => {
        console.log(err);

        throw err;
      })
      .finally(() => setLoading(false));

    return result;
  }, [authService]);

  const googleSignIn = useCallback(async (): Promise<User> => {
    setLoading(true);

    const result = await authService
      .signinWithGoogle()
      .catch(err => {
        console.log(err);

        throw err;
      })
      .finally(() => setLoading(false));

    return result;
  }, [authService]);

  const onUserChanged = useCallback(
    (cb: (user: User | null) => void) => {
      authService.onUserChanged(cb);
    },
    [authService],
  );

  const signUp = useCallback(async (email: string, password: string): Promise<User> => {
    setLoading(true);

    const result = await authService
      .signup(email, password)
      .catch(err => {
        console.log(err);

        throw err;
      })
      .finally(() => setLoading(false));

    return result;
  }, [authService]);

  const signOut = useCallback(async (): Promise<void> => {
    setLoading(true);

    await authService
      .signout()
      .catch(err => {
        console.log(err);

        throw err;
      })
      .finally(() => setLoading(false));

  }, [authService]);

  return {
    loading,
    signIn,
    googleSignIn,
    onUserChanged,
    signUp,
    signOut
  };
};

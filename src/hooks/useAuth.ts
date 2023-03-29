import {useCallback, useMemo, useState} from 'react';
import {User} from '../domain/models/user';
import {GoogleService} from '../services/firebase.google.service';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const googleService = useMemo(() => new GoogleService(), []);

  const googleSignIn = useCallback(async (): Promise<User> => {
    setLoading(true);

    const result = await googleService
      .signinWithGoogle()
      .catch(err => {
        console.log(err);

        throw err;
      })
      .finally(() => setLoading(false));

    return result;
  }, [googleService]);

  const onUserChanged = useCallback(
    (cb: (user: User | null) => void) => {
      googleService.onUserChanged(cb);
    },
    [googleService],
  );

  return {
    loading,
    googleSignIn,
    onUserChanged,
  };
};

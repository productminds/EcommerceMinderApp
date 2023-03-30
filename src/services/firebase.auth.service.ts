import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Config from 'react-native-config';

import {Auth} from '../domain/interfaces/auth.repository';
import {User} from '../domain/models/user';
import {ensureNonNullable} from '../utils/ensure-non-nullable';
import {BadParametersException} from '../utils/exceptions/bad-parameters.exception';

export class AuthService implements Auth {
  private readonly webClientId: string;

  constructor() {
    this.webClientId = ensureNonNullable(Config.GOOGLE_WEB_CLIENT_ID);
    GoogleSignin.configure({
      webClientId: this.webClientId,
    });
  }

  async signin(email: string, password: string): Promise<User> {
    try {
      const userSignIn = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      return makeUser(userSignIn.user);
    } catch (err) {
      throw makeError(err);
    }
  }

  async signinWithGoogle(): Promise<User> {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userSignIn = await auth().signInWithCredential(googleCredential);

      return makeUser(userSignIn.user);
    } catch (err) {
      throw makeError(err);
    }
  }

  async signup(email: string, password: string): Promise<User> {
    try {
      const userSignUp = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      return makeUser({...userSignUp.user, email});
    } catch (err) {
      throw makeError(err);
    }
  }

  onUserChanged(cb: (user: User | null) => void): void {
    auth().onUserChanged(user => {
      cb(user ? makeUser(user) : null);
    });
  }

  async signout() {
    try {
      await auth().signOut();
    } catch (err) {
      throw makeError(err);
    }
  }
}

const errorMapper: Record<string, typeof BadParametersException> = {
  'auth/wrong-password': BadParametersException,
};

function makeError(err: unknown) {
  const errorAsObject = err as {code: string};

  const error = errorMapper[errorAsObject.code];

  return new error('Could not login', errorAsObject);
}

function makeUser(user: FirebaseAuthTypes.User): User {
  const id = user.uid;
  const [firstName, lastName] = user.displayName?.split(' ') ?? [];
  const email = user.email!;

  return new User({id, firstName, lastName, email});
}

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {Auth} from '../domain/interfaces/auth.repository';
import {User} from '../domain/models/user';
import {ensureNonNullable} from '../utils/ensure-non-nullable';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export class GoogleService implements Auth {
  private readonly webClientId: string;

  constructor() {
    // this.webClientId = ensureNonNullable(Config.GOOGLE_WEB_CLIENT_ID);
    this.webClientId = ensureNonNullable("799762509157-c8t42andcmlpen4jfv5v96atussdvg37.apps.googleusercontent.com");
    GoogleSignin.configure({
        webClientId: this.webClientId,
      });
  }

  async signin(): Promise<User> {

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const userSignIn = auth().signInWithCredential(googleCredential);

    return makeUser(userSignIn);
    
  }

}

function makeUser(user: Promise<FirebaseAuthTypes.UserCredential>): Promise<User> {

  user.then((user) => {
    const id = user.user.uid;
    const firstName = user.additionalUserInfo?.profile?.given_name;
    const lastName = user.additionalUserInfo?.profile?.family_name;
    const email = user.additionalUserInfo?.profile?.email;

    return Promise.resolve(new User({id, firstName, lastName, email}));
  }).catch((error) => {
    console.log(error)
  })

  throw new Error("User not found");

}

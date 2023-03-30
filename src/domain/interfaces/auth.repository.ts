import {User} from '../models/user';

type OnUserChangedCallback = (user: User | null) => void;

export interface Auth {
  /** Sign In user */
  signinWithGoogle(): Promise<User>;

  signin(email: string, password: string): Promise<User>;

  signout(): void;

  onUserChanged(cb: OnUserChangedCallback): void;
}

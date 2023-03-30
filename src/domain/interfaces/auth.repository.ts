import {User} from '../models/user';

type OnUserChangedCallback = (user: User | null) => void;

export interface Auth {

  signinWithGoogle(): Promise<User>;

  signin(email: string, password: string): Promise<User>;

  signout(): void;

  onUserChanged(cb: OnUserChangedCallback): void;

  signup(email: string, password: string): Promise<User>;

  signout(): void;
}

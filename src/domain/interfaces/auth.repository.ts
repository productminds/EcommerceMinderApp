import {User} from '../models/user';

export interface Auth {

  /** Sign In user */
  signin(): Promise<User>;

}
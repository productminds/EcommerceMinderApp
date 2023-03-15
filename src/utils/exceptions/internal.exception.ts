import {Exception} from './exception';

export class InternalException extends Exception {
  constructor(message: string, stack?: unknown) {
    super(InternalException.name, `Interal Exception: ${message}`, stack);
  }
}

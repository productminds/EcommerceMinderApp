import {Exception} from './exception';

export class BadParametersException extends Exception {
  constructor(message: string, stack?: unknown) {
    super(BadParametersException.name, message, stack);
  }
}

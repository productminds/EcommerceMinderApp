export class Exception implements Error {
  readonly name: string;
  readonly message: string;
  readonly stack?: string;

  constructor(name: string, message: string, stack?: unknown) {
    this.name = name;
    this.message = message;
    this.stack = JSON.stringify(stack);
  }
}

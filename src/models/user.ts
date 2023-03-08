export class User {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;

  constructor(init: User) {
    this.id = init.id;
    this.email = init.email;
    this.firstName = init.firstName;
    this.lastName = init.lastName;
  }
}

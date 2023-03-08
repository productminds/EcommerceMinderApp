export class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly imageUri: string;
  readonly price: number;

  constructor(init: Product) {
    this.id = init.id;
    this.name = init.name;
    this.description = init.description;
    this.imageUri = init.imageUri;
    this.price = init.price;
  }
}

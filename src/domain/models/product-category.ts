export class ProductCategory {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly coverUri?: string;

  constructor(init: ProductCategory) {
    this.id = init.id;
    this.name = init.name;
    this.description = init.description;
    this.coverUri = init.coverUri;
  }
}

import {Product} from './product';

export class Cart {
  readonly products: Product[];

  constructor(init: Cart) {
    this.products = init.products;
  }

  /** Calculate the total of cart as computed property */
  get total(): number {
    return this.products.reduce((acc, obj) => (acc += obj.price), 0);
  }
}

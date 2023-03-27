import {Product} from './product';

export class CartItem {
  readonly product: Product;
  readonly quantity: number;

  constructor(init: Omit<CartItem, 'itemsTotal'>) {
    this.product = init.product;
    this.quantity = init.quantity;
  }

  /** Calculate the total of this item as computed property */
  get itemsTotal(): number {
    return this.product.price * this.quantity;
  }
}

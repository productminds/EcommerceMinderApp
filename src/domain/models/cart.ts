import {CartItem} from './cart-item';
import {Product} from './product';

export class Cart {
  readonly items: Record<string, CartItem>;

  constructor() {
    this.items = {};
  }

  /** Calculate the total of cart as computed property */
  get total(): number {
    return Object.values(this.items).reduce((acc, obj) => {
      console.log('obj', obj.itemsTotal);
      return (acc += obj.itemsTotal);
    }, 0);
  }

  addProduct(product: Product, quantity: number = 1) {
    const item = this.items[product.id];
    const itemQuantity = (item ? item.quantity : 0) + quantity;

    this.items[product.id] = new CartItem({
      product,
      quantity: itemQuantity,
    });
  }

  removeProduct(product: Product, quantity: number = 1) {
    const item = this.items[product.id];

    if (!item) {
      return;
    }

    const itemQuantity = item.quantity - quantity;

    if (itemQuantity <= 0) {
      delete this.items[product.id];

      return;
    }

    this.items[product.id] = new CartItem({
      product,
      quantity: itemQuantity,
    });
  }
}

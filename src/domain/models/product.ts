import Ref from '../../utils/ref';
import {ProductCategory} from './product-category';

export class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly imageUri?: string;
  readonly price: number;
  readonly category: Ref<ProductCategory>;

  constructor(init: Product) {
    this.id = init.id;
    this.name = init.name;
    this.description = init.description;
    this.imageUri = init.imageUri;
    this.price = init.price;
    this.category = init.category;
  }
}

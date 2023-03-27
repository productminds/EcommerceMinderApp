import {Product} from '../models/product';
import {ProductCategory} from '../models/product-category';

export interface ProductRepository {
  /** Fetch all db products */
  fetchAll(): Promise<Product[]>;

  /** Fetch all db products by filtered by category */
  fetchByCategory(category: ProductCategory): Promise<Product[]>;
}

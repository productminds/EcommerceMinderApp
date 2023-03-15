import {ProductCategory} from '../models/product-category';

export interface CategoryRepository {
  /** Fetch all db categories */
  fetchAll(): Promise<ProductCategory[]>;
}

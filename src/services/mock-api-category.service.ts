import Config from 'react-native-config';
import {CategoryRepository} from '../domain/interfaces/category.repository';
import {ProductCategory} from '../domain/models/product-category';
import {ensureNonNullable} from '../utils/ensure-non-nullable';
import {request} from '../utils/request-handler';

/** Mock API implementation of CategoryRepository */
export default class CategoryService implements CategoryRepository {
  private readonly uri: string;

  constructor() {
    this.uri = new URL(
      'categories',
      ensureNonNullable(Config.API_BASE_URI),
    ).toJSON();
  }

  async fetchAll(): Promise<ProductCategory[]> {
    const response = await request<ProductCategory[]>(this.uri, {
      method: 'GET',
    });

    return response;
  }
}

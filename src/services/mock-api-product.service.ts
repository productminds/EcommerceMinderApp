import Config from 'react-native-config';
import {ProductRepository} from '../domain/interfaces/product.repository';
import {Product} from '../domain/models/product';
import {ProductCategory} from '../domain/models/product-category';
import {ensureNonNullable} from '../utils/ensure-non-nullable';
import {request} from '../utils/request-handler';

type MockApiProductDtoResponse = Omit<Product, 'category'> & {
  categoryId: string;
};

/** Mock API implementation of ProductRepository */
export class ProductService implements ProductRepository {
  private readonly uri: string;

  constructor() {
    this.uri = new URL(
      'products',
      ensureNonNullable(Config.API_BASE_URI),
    ).toJSON();
  }

  async fetchAll(): Promise<Product[]> {
    const products = await request<MockApiProductDtoResponse[]>(this.uri, {
      method: 'GET',
    });

    return products.map(makeProduct);
  }

  /** With mock api we don't have the resource of filter by category. Should be implemented on front side */
  fetchByCategory(_category: ProductCategory): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}

function makeProduct(dto: MockApiProductDtoResponse): Product {
  return new Product({...dto, category: {id: dto.categoryId}});
}

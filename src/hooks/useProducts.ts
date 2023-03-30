import {useCallback, useMemo, useState} from 'react';

import {Product} from '../domain/models/product';
import {ProductService} from '../services/mock-api-product.service';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const service = useMemo(() => new ProductService(), []);

  const fetchAll = useCallback(async (): Promise<Product[]> => {
    setLoading(true);

    const result = await service.fetchAll().finally(() => setLoading(false));

    setProducts(result);
    return result;
  }, [service]);

  const fetchByCategory = useCallback(async (): Promise<Product[]> => {
    setLoading(true);
    const result = await service.fetchAll().finally(() => setLoading(false));

    setProducts(result);
    return result;
  }, [service]);

  return {
    products,
    loading,
    fetchAll,
    fetchByCategory,
  };
};

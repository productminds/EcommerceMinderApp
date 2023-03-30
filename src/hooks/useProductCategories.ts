import {useCallback, useState, useMemo} from 'react';

import {ProductCategory} from '../domain/models/product-category';
import CategoryService from '../services/mock-api-category.service';

export const useProductCategories = () => {
  const service = useMemo(() => new CategoryService(), []);

  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    const response = await service.fetchAll().finally(() => {
      setLoading(false);
    });

    setCategories(response);
  }, [service]);

  return {fetchAll, categories, loading};
};

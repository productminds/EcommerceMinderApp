import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import React from 'react';
import {Product} from '../domain/models/product';
import {ProductCategory} from '../domain/models/product-category';

interface Filters {
  categories: ProductCategory[];
}

interface ProductsContext {
  products: Product[];

  filteredProducts: Product[];

  filters: Filters;

  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;

  handleCategoriesFilter: (categories: ProductCategory[]) => void;
}

const ProductsContext = createContext({} as ProductsContext);

export const useProductsContext = () => useContext(ProductsContext);

interface ProductsManagementProviderProps {
  children: JSX.Element;
}

export default function ProductsManagementProvider({
  children,
}: ProductsManagementProviderProps): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({categories: []} as Filters);

  const handleCategoriesFilter = useCallback(
    (categories: ProductCategory[]) => {
      setFilters({
        ...filters,
        categories,
      });
    },
    [filters],
  );

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      filters.categories.map(c => c.id).includes(p.category.id),
    );
  }, [products, filters]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        filters,
        filteredProducts,

        handleCategoriesFilter,

        setFilters,
        setProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
}

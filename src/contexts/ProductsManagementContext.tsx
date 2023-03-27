import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import React from 'react';
import {Product} from '../domain/models/product';
import {ProductCategory} from '../domain/models/product-category';

interface Filters {
  categories: ProductCategory[];
}

interface ProductsManagementContextProps {
  products: Product[];
  productsInCart: Product[];

  filteredProducts: Product[];

  filters: Filters;

  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;

  handleCategoriesFilter: (categories: ProductCategory[]) => void;

  addProductToCart: (product: Product) => void;
  removeProductToCart: (product: Product) => void;
}

const ProductsManagementContext = createContext(
  {} as ProductsManagementContextProps,
);

export const useProductsManagementContext = () =>
  useContext(ProductsManagementContext);

interface ProductsManagementProviderProps {
  children: JSX.Element;
}

export default function ProductsManagementProvider({
  children,
}: ProductsManagementProviderProps): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsInCart, setSelectProductsInCart] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({categories: []} as Filters);

  const addProductToCart = (product: Product) => {
    const alreadyInCartProducts = [...productsInCart, product];

    setSelectProductsInCart(alreadyInCartProducts);
  };

  const removeProductToCart = (product: Product) => {
    const productsToSet = products.filter(p => p.id !== product.id);

    setSelectProductsInCart(productsToSet);
  };

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
    <ProductsManagementContext.Provider
      value={{
        products,
        productsInCart,
        filters,
        filteredProducts,

        handleCategoriesFilter,

        setFilters,
        setProducts,
        addProductToCart,
        removeProductToCart,
      }}>
      {children}
    </ProductsManagementContext.Provider>
  );
}

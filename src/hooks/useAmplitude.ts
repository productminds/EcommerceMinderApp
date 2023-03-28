import {useCallback} from 'react';
import {ampli} from '../ampli';
import {Cart} from '../domain/models/cart';
import {Product} from '../domain/models/product';

export const useAmplitude = () => {
  const trackProductAddedToCart = useCallback(
    (product: Product, quantity: number) => {
      ampli.productAdded({
        'Product ID': product.id,
        'Product Name': product.name,
        'Category ID': product.category.id,
        Price: product.price,
        Quantity: quantity,
      });
    },
    [],
  );

  const trackProductRemovedToCart = useCallback(
    (product: Product, quantity: number) => {
      ampli.productRemoved({
        'Category ID': product.category.id,
        'Product ID': product.id,
        Price: product.price,
        Quantity: quantity,
        'Product Name': product.name,
      });
    },
    [],
  );

  const trackSearchCompleted = useCallback(
    (searched: string, numberOfResults: number) => {
      ampli.searchCompleted({
        'Number Of Results': numberOfResults,
        Searched: searched,
      });
    },
    [],
  );

  const trackProductFavorited = useCallback((product: Product) => {
    ampli.productFavorited({
      'Category ID': product.category.id,
      'Product ID': product.id,
      'Product Name': product.name,
      Price: product.price,
    });
  }, []);

  const trackCartViewed = useCallback((cart: Cart) => {
    ampli.cartViewed({
      'Subtotal Cart Value': cart.total,
      'Total Cart Value': cart.total,
      'Total Cart Size': Object.values(cart.items).length,
      'Total Discount': 0,
    });
  }, []);

  const trackAccountCreated = useCallback(
    (accountType: 'Google' | 'Email/Password' = 'Google') => {
      ampli.accountCreated({
        'Account Creation Date': new Date().toISOString(),
        'Account Type': accountType,
      });
    },
    [],
  );

  const trackHomeViewed = useCallback(() => {
    ampli.homeViewed();
  }, []);

  return {
    trackCartViewed,
    trackProductAddedToCart,
    trackProductRemovedToCart,
    trackProductFavorited,
    trackSearchCompleted,
    trackAccountCreated,
    trackHomeViewed,
  };
};

import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import React from 'react';

import {Product} from '../domain/models/product';
import {CartItem} from '../domain/models/cart-item';
import {Cart} from '../domain/models/cart';

import {useAmplitude} from '../hooks/useAmplitude';
import useBraze from '../hooks/useBraze';

interface CartContextProps {
  productsInCart: CartItem[];
  cartTotal: number;
  cart: Cart;
  removeAllProductItems: (product: Product) => void;
  addProductItem: (product: Product, quantity?: number) => void;
  removeProductItem: (product: Product, quantity?: number) => void;
  checkIfIsOnCart: (product: Product) => boolean;
}

const CartContext = createContext({} as CartContextProps);

export const useCartContext = () => useContext(CartContext);

interface CartContextProviderProps {
  children: JSX.Element;
}

const CartProvider = ({children}: CartContextProviderProps): JSX.Element => {
  const [items, setItems] = useState<CartItem[]>([]);
  const cart = useMemo(() => new Cart(), []);
  const {trackProductAddedToCart, trackProductRemovedToCart} = useAmplitude();
  const {logProductAdded} = useBraze();

  const addProductItem = useCallback(
    (product: Product, quantity?: number) => {
      cart.addProduct(product, quantity);
      trackProductAddedToCart(product, quantity ?? 1);
      logProductAdded(product);

      setItems(Object.values(cart.items));
    },
    [cart, trackProductAddedToCart, logProductAdded],
  );

  const removeProductItem = useCallback(
    (product: Product, quantity?: number) => {
      cart.removeProduct(product, quantity);
      trackProductRemovedToCart(product, quantity ?? 1);

      setItems(Object.values(cart.items));
    },
    [cart, trackProductRemovedToCart],
  );

  const removeAllProductItems = useCallback(
    (product: Product) => {
      removeProductItem(product, cart.items[product.id].quantity);
    },
    [removeProductItem, cart.items],
  );

  const checkIfIsOnCart = useCallback(
    (product: Product) => Boolean(cart.items[product.id]),
    [cart],
  );

  const cartTotal = useMemo(() => cart.total, [cart.total]);

  return (
    <CartContext.Provider
      value={{
        productsInCart: items,
        cartTotal,
        cart,
        addProductItem,
        removeProductItem,
        removeAllProductItems,
        checkIfIsOnCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React from 'react';
import CartProductsList from '../../components/CartProductsList';
import CartSummary from '../../components/CartSummary';
import DefaultScreenLayout from '../../components/DefaultScreenLayout';
import TitledHeader from '../../components/TitledHeader';
import {useCartContext} from '../../contexts/CartContext';
import styles from './styles';

export const CartScreen = (): JSX.Element => {
  const {productsInCart, cartTotal} = useCartContext();

  return (
    <DefaultScreenLayout scrollView={false}>
      <TitledHeader title="My Cart" hideBackButton={true} />
      <CartProductsList data={productsInCart} style={styles.productsList} />
      <CartSummary subtotal={cartTotal} />
    </DefaultScreenLayout>
  );
};

export default CartScreen;

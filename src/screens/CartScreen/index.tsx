import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';

import CartProductsList from '../../components/CartProductsList';
import CartSummary from '../../components/CartSummary';
import DefaultScreenLayout from '../../components/DefaultScreenLayout';
import TitledHeader from '../../components/TitledHeader';
import styles from './styles';
import {useCartContext} from '../../contexts/CartContext';

import {useAmplitude} from '../../hooks/useAmplitude';


export const CartScreen = (): JSX.Element => {
  const {productsInCart, cartTotal, cart} = useCartContext();
  const {trackCartViewed} = useAmplitude();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('oi');
      trackCartViewed(cart);
    }
  }, [trackCartViewed, cart, isFocused]);

  return (
    <DefaultScreenLayout scrollView={false}>
      <TitledHeader title="My Cart" hideBackButton={true} />
      <CartProductsList data={productsInCart} style={styles.productsList} />
      <CartSummary subtotal={cartTotal} />
    </DefaultScreenLayout>
  );
};

export default CartScreen;

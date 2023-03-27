import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CartItem} from '../domain/models/cart-item';
import {Sizes} from '../utils/constants/theme';
import CartProductItem from './CartProductItem';

interface CartProductsListProps {
  data: CartItem[];
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  separator: {
    height: Sizes.margin,
  },
});

const Separator = (): JSX.Element => <View style={styles.separator} />;

const CartProductsList = ({
  style,
  data,
}: CartProductsListProps): JSX.Element => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => <CartProductItem item={item} />}
      />
    </View>
  );
};

export default CartProductsList;

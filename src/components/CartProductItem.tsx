import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, IconButton, Text} from 'react-native-paper';
import {useCartContext} from '../contexts/CartContext';
import {CartItem} from '../domain/models/cart-item';
import {Colors, Sizes} from '../utils/constants/theme';

interface CartProductItemProps {
  item: CartItem;
}

const styles = StyleSheet.create({
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    padding: Sizes.margin2,
    gap: Sizes.margin2,
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
  },

  cover: {
    width: '30%',
  },

  infoView: {
    flex: 1,
    display: 'flex',
    gap: Sizes.margin,
  },

  spacer: {
    flex: 1,
  },

  icon: {
    backgroundColor: Colors.primary,
  },

  quantity: {
    marginHorizontal: Sizes.margin,
    fontSize: Sizes.h3,
  },

  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const CartProductItem = ({item}: CartProductItemProps): JSX.Element => {
  const {addProductItem, removeProductItem} = useCartContext();

  return (
    <Card mode="contained" contentStyle={styles.cardContent}>
      <View style={styles.cover}>
        <Card.Cover source={{uri: item.product.imageUri}} />
      </View>
      <View style={styles.infoView}>
        <Text variant="titleLarge">{item.product.name}</Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {item.product.description}
        </Text>
        <Text>${item.itemsTotal}</Text>
        <View style={styles.spacer} />
        <View style={styles.actions}>
          <IconButton
            icon="minus"
            style={styles.icon}
            iconColor={Colors.white}
            onPress={() => removeProductItem(item.product)}
          />
          <Text style={styles.quantity}>{item.quantity}</Text>
          <IconButton
            icon="plus"
            style={styles.icon}
            iconColor={Colors.white}
            onPress={() => addProductItem(item.product)}
          />
        </View>
      </View>
    </Card>
  );
};

export default CartProductItem;

import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, IconButton, Text} from 'react-native-paper';
import {useCartContext} from '../contexts/CartContext';
import {Product} from '../domain/models/product';
import {Sizes} from '../utils/constants/theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 200,
  },

  card: {
    padding: Sizes.margin2,
    height: '100%',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: Sizes.margin,
    marginBottom: Sizes.margin2,
  },

  headerText: {
    flex: 1,
    display: 'flex',
    gap: Sizes.margin,
  },

  body: {
    flex: 1,
  },

  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const ProductCard = memo((product: Product): JSX.Element => {
  const {addProductItem, removeAllProductItems, checkIfIsOnCart} =
    useCartContext();

  const {imageUri, name, description, price} = product;

  return (
    <Card mode="outlined" style={styles.container} contentStyle={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text variant="titleLarge">{name}</Text>
          <Text ellipsizeMode="tail" numberOfLines={2} variant="labelSmall">
            {description}
          </Text>
        </View>
        <Text>${price}</Text>
      </View>
      <View style={styles.body}>
        <Card.Cover source={{uri: imageUri, height: 20}} />
      </View>
      <View style={styles.action}>
        {checkIfIsOnCart(product) ? (
          <Button onPress={() => removeAllProductItems(product)}>
            Rem. from cart
          </Button>
        ) : (
          <Button onPress={() => addProductItem(product)}>Add to cart</Button>
        )}
        <IconButton icon="heart" />
      </View>
    </Card>
  );
});

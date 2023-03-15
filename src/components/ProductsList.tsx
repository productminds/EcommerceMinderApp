import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Product} from '../domain/models/product';
import {Sizes} from '../utils/constants/theme';
import {ProductCard} from './ProductCard';

interface ProductsListProps {
  data: Product[];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: Sizes.margin3,
  },

  list: {
    height: '100%',
  },

  separator: {
    width: Sizes.margin,
  },
});

const Separator = (): JSX.Element => <View style={styles.separator} />;

export const ProductsList = memo(({data}: ProductsListProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => <ProductCard {...item} />}
      />
    </View>
  );
});

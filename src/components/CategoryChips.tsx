import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Chip} from 'react-native-paper';
import {useProductsContext} from '../contexts/ProductsManagementContext';
import {ProductCategory} from '../domain/models/product-category';
import {Sizes, Colors} from '../utils/constants/theme';

interface CategoryChipsProps {
  data: ProductCategory[];
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Sizes.margin3,
  },

  separator: {
    width: Sizes.margin,
  },

  chip: {
    backgroundColor: 'transparent',
    borderColor: Colors.black,
    color: Colors.darkgray,
  },
});

const Separator = (): JSX.Element => <View style={styles.separator} />;

const defaultCategory: ProductCategory = {
  id: 'all',
  name: 'All',
  description: 'All products',
};

const CategoryChips = ({data}: CategoryChipsProps): JSX.Element => {
  const {filters, handleCategoriesFilter} = useProductsContext();

  const addToFilters = useCallback(
    (item: ProductCategory) => {
      const obj = {...filters};

      obj.categories.push(item);

      handleCategoriesFilter(obj.categories);
    },
    [filters, handleCategoriesFilter],
  );

  const removeFromFilters = useCallback(
    (item: ProductCategory) => {
      const obj = {...filters};

      obj.categories = obj.categories.filter(c => c.id !== item.id);

      handleCategoriesFilter(obj.categories);
    },
    [filters, handleCategoriesFilter],
  );

  const isAlreadyInFilters = useCallback(
    (item: ProductCategory) =>
      (item.id === defaultCategory.id &&
        filters.categories.length === data.length) ||
      Boolean(filters.categories.find(c => c.id === item.id)),
    [filters.categories, data],
  );

  const manageAllCategories = useCallback(() => {
    const categoriesToFilter =
      data.length === filters.categories.length ? [] : [...data];

    handleCategoriesFilter(categoriesToFilter);
  }, [data, filters, handleCategoriesFilter]);

  const manageItemInFilters = useCallback(
    (item: ProductCategory) => {
      if (item.id === defaultCategory.id) {
        manageAllCategories();
        return;
      }

      isAlreadyInFilters(item) ? removeFromFilters(item) : addToFilters(item);
    },
    [isAlreadyInFilters, addToFilters, removeFromFilters, manageAllCategories],
  );

  useEffect(() => {
    handleCategoriesFilter(data);
    /** Should run only when data change */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={Separator}
        data={[defaultCategory, ...data]}
        renderItem={({item}) => (
          <Chip
            mode="outlined"
            style={styles.chip}
            selected={isAlreadyInFilters(item)}
            onPress={() => manageItemInFilters(item)}>
            {item.name}
          </Chip>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default CategoryChips;

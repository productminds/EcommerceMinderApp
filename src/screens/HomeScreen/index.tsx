import {IconButton} from 'react-native-paper';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import SearchBar from '../../components/SearchBar';
import DefaultScreenLayout from '../../components/DefaultScreenLayout';
import styles from './styles';
import CategoryChips from '../../components/CategoryChips';
import ContentCards from '../../components/ContentCards';
import {ProductsList} from '../../components/ProductsList';
import {useProductsContext} from '../../contexts/ProductsManagementContext';
import {Colors} from '../../utils/constants/theme';

import {useProductCategories} from '../../hooks/useProductCategories';
import {useProducts} from '../../hooks/useProducts';
import {useAmplitude} from '../../hooks/useAmplitude';
import useBraze from '../../hooks/useBraze';

const HomeScreen = (): JSX.Element => {
  const {
    categories,
    loading: categoriesLoading,
    fetchAll: fetchAllCategories,
  } = useProductCategories();
  const {
    products,
    loading: productsLoading,
    fetchAll: fetchAllProducts,
  } = useProducts();
  const {filteredProducts, setProducts} = useProductsContext();
  const [search, setSearch] = useState('');
  const {trackHomeViewed, trackSearchCompleted} = useAmplitude();
  const {contentCards, fetchContentCards} = useBraze();
  const isFocused = useIsFocused();

  const handleLoad = useCallback(() => {
    if (isFocused) {
      fetchAllProducts();
      fetchAllCategories();
      fetchContentCards();
    }
  }, [isFocused, fetchAllProducts, fetchAllCategories, fetchContentCards]);

  useEffect(() => {
    handleLoad();
    trackHomeViewed();
  }, [handleLoad, trackHomeViewed]);

  useEffect(() => {
    if (isFocused) {
      trackHomeViewed();
    }
  }, [isFocused, trackHomeViewed]);

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  const searchedProducts = useMemo(
    () =>
      filteredProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [filteredProducts, search],
  );

  return (
    <DefaultScreenLayout
      onRefresh={handleLoad}
      refreshing={categoriesLoading || productsLoading}>
      <View style={styles.searchContainer}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          onEndEditing={value =>
            trackSearchCompleted(value, searchedProducts.length)
          }
        />
        <IconButton icon="bell" iconColor={Colors.secondary} />
      </View>
      <ContentCards data={contentCards} />
      <CategoryChips data={categories} />
      <ProductsList data={searchedProducts} />
    </DefaultScreenLayout>
  );
};

export default HomeScreen;

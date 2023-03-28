import {IconButton} from 'react-native-paper';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import SearchBar from '../../components/SearchBar';
import DefaultScreenLayout from '../../components/DefaultScreenLayout';
import styles from './styles';
import CategoryChips from '../../components/CategoryChips';
import {useProductCategories} from '../../hooks/useProductCategories';
import ContentCards from '../../components/ContentCards';
import {ProductsList} from '../../components/ProductsList';
import {useProducts} from '../../hooks/useProducts';
import {useProductsContext} from '../../contexts/ProductsManagementContext';
import {useAmplitude} from '../../hooks/useAmplitude';

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

  const handleLoad = useCallback(() => {
    fetchAllProducts();
    fetchAllCategories();
  }, [fetchAllProducts, fetchAllCategories]);

  useEffect(() => {
    handleLoad();
    trackHomeViewed();
  }, [handleLoad, trackHomeViewed]);

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
            trackSearchCompleted(value, filteredProducts.length)
          }
        />
        <IconButton icon="bell" />
      </View>
      <ContentCards
        data={[
          {
            id: 'content-card1',
            image: 'https://unsplash.com/pt-br/fotografias/HYLfpSdpFV0',
            title: 'Cupom de desconto',
          },
          {
            id: 'content-card2',
            image: 'https://unsplash.com/pt-br/fotografias/HYLfpSdpFV0',
            title: 'Cupom de desconto',
          },
        ]}
      />
      <CategoryChips data={categories} />
      <ProductsList data={searchedProducts} />
    </DefaultScreenLayout>
  );
};

export default HomeScreen;

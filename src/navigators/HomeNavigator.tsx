import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Colors} from '../utils/constants/theme';
import ProductsManagementProvider from '../contexts/ProductsManagementContext';
import CartScreen from '../screens/CartScreen';
import CartProvider, {useCartContext} from '../contexts/CartContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Badge} from 'react-native-paper';
import {StyleSheet} from 'react-native';

type HomeNavigatorTabParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
};

const styles = StyleSheet.create({
  badge: {
    zIndex: 3,
    backgroundColor: 'yellow',
    position: 'absolute',
    top: -7,
    right: -7,
  },
});

const CartIcon = ({color}: {color: string}) => {
  const {productsInCart} = useCartContext();

  return (
    <>
      {productsInCart.length > 0 && <Badge size={16} style={styles.badge} />}
      <MaterialCommunityIcons name="cart" color={color} size={26} />
    </>
  );
};
const BottomTab = createMaterialBottomTabNavigator<HomeNavigatorTabParamList>();

const HomeNavigator = (): JSX.Element => {
  return (
    <ProductsManagementProvider>
      <CartProvider>
        <BottomTab.Navigator activeColor={Colors.primary}>
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: 'home-account',
            }}
          />
          <BottomTab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: CartIcon,
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: 'face-woman-profile',
            }}
          />
        </BottomTab.Navigator>
      </CartProvider>
    </ProductsManagementProvider>
  );
};

export default HomeNavigator;

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {Colors, Sizes} from '../utils/constants/theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: Sizes.margin2,
  },

  summaryItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: Sizes.margin,
  },

  summaryItemLabel: {
    flex: 1,
  },

  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },

  total: {
    paddingVertical: Sizes.margin,
  },
});

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary = ({subtotal}: CartSummaryProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryItemLabel}>Subtotal: </Text>
        <Text>${subtotal}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryItemLabel}>Shipping: </Text>
        <Text>FREE</Text>
      </View>
      <View style={styles.divider} />
      <View style={[styles.summaryItem, styles.total]}>
        <Text style={styles.summaryItemLabel}>Total: </Text>
        <Text>${subtotal}</Text>
      </View>
    </View>
  );
};

export default CartSummary;

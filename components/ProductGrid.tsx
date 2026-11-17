import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Product } from '../constants/products';
import ProductCard from './ProductCard';
import { Spacing } from '../constants/theme';

type Props = {
  products: Product[];
};

function columnsForWidth(width: number) {
  if (width >= 1200) return 5;
  if (width >= 900) return 4;
  if (width >= 600) return 3;
  return 2;
}

export default function ProductGrid({ products }: Props) {
  const { width } = useWindowDimensions();
  const columns = columnsForWidth(width);
  const rows: Product[][] = [];
  for (let i = 0; i < products.length; i += columns) {
    rows.push(products.slice(i, i + columns));
  }

  return (
    <View style={styles.grid}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {Array.from({ length: columns - row.length }, (_, i) => (
            <View key={`spacer-${i}`} style={{ flex: 1 }} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: Spacing.m,
    gap: Spacing.m,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.m,
  },
});

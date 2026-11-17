import React from 'react';
import { ScrollView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Fonts } from '../constants/theme';
import { categories } from '../constants/products';

type Props = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  isSortedByPriceLowToHigh: boolean;
  onToggleSortByPriceLowToHigh: () => void;
};

export default function FilterChips({
  activeFilter,
  onFilterChange,
  isSortedByPriceLowToHigh,
  onToggleSortByPriceLowToHigh,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filters}
    >
      <TouchableOpacity
        style={[styles.chip, styles.sortChip, isSortedByPriceLowToHigh && styles.chipActive]}
        onPress={onToggleSortByPriceLowToHigh}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityState={{ selected: isSortedByPriceLowToHigh }}
      >
        <Ionicons
          name="arrow-up"
          size={14}
          color={isSortedByPriceLowToHigh ? Colors.paperWhite : Colors.inkBlack}
        />
        <Text style={[styles.chipText, isSortedByPriceLowToHigh && styles.chipTextActive]}>
          Price: low to high
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      {categories.map(filter => (
        <TouchableOpacity
          key={filter}
          style={[styles.chip, activeFilter === filter && styles.chipActive]}
          onPress={() => onFilterChange(filter)}
          activeOpacity={0.7}
        >
          <Text style={[styles.chipText, activeFilter === filter && styles.chipTextActive]}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filters: {
    flexDirection: 'row',
    gap: Spacing.s,
    paddingHorizontal: Spacing.m,
    paddingBottom: Spacing.m,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: Colors.lightGray,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  sortChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    borderColor: Colors.inkBlack,
    backgroundColor: Colors.paperWhite,
  },
  chipActive: {
    backgroundColor: Colors.inkBlack,
  },
  chipText: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: Fonts.body,
    color: Colors.inkBlack,
  },
  chipTextActive: {
    color: Colors.paperWhite,
  },
  divider: {
    width: 1,
    marginVertical: 6,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

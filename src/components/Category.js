import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { colors, fontType } from '../theme';
import CategoryCard from './CategoryCard';
import categoryData from '../data/category-data';

export default function Category() {
  return (
    <View style={styles.container}>
      <View style={styles.category}>
        <Text style={styles.heading}>Kategori</Text>
          <Text style={styles.text}>See All</Text>
      </View>
      <FlatList
      
        scrollEnabled={false}
        data={categoryData}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => <CategoryCard item={item} />}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  categoryCard: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.grey(0.2),
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 235,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fontType['Itr-Medium'],
    color: colors.black(0.8),
  },
  text: {
    fontSize: 16,
    fontWeight: 'regular',
    fontFamily: fontType['Itr-Regular'],
    color: colors.black(0.8),
  },
})
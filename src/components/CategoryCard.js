import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { colors, fontType } from '../theme';

export default function CategoryCard({ item, onPress }) {
  return (
    <View style={styles.container} key={item.id}>
      <View style={styles.categoryCard}>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.cardContainer}>
          <Image style={styles.image} source={item.image} resizeMode="contain" />
          <Text style={styles.text}>{item.title}</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
  cardContainer: {
    width: 90,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    gap: 10,    
  },
  categoryCard: {
    padding: 15,
    marginTop: 20,
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    

  },
  image: {
    width: 90, 
    height: 90, 
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'regular',
    fontFamily: fontType['Itr-Regular'],
    color: colors.black(0.8),
  },
})
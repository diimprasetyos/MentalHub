import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { fontType } from '../theme';

export default function MentorCard({ item }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.cardHandle}>
          <View style={styles.MentorCard}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.title}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.titleText}>{item.category}</Text>
              <Text style={styles.price}>Rp. {item.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardHandle: {
    padding: 15,
    marginTop: 20,
    gap: 10,
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  MentorCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    width: 340,
    height: 140, 
    borderRadius: 10,
    gap: 10,
  },
  image: {
    width: 100,
    height: '100%', 
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    top: 0,
    padding: 10,
    width: 220, 
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 0,
    gap: 5,
  },
  titleText: {
    fontSize: 16,
    color: '#000',
    fontFamily: fontType['Itr-Medium'],
  },
  price: {
    fontSize: 14,
    color: '#000',
    fontFamily: fontType['Itr-Medium'],
  },
});

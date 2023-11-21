import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors, fontType } from '../theme'
import { SearchNormal1 } from 'iconsax-react-native'

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
        </View>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    height: 52,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
})
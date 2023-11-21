import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors, fontType } from '../theme'

export default function Greetings() {
  return (
      <View style={styles.container}>
          <View style={styles.greetBox}>
              <Text style={styles.heading}>Halo, Dimas</Text>
              <Text style={styles.text}>Bagaimana perasaanmu hari ini?</Text>
          </View>
          <View style={styles.profilePicture}>
              <Image style={styles.profile} source={require('../assets/images/profile.jpeg')} />
          </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
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
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 60,    
  },
})
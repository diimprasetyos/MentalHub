import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './src/screens/Home/index'; 
import MentorDetails from './src/screens/MentorDetails';
import Konsultasi from './src/screens/Konsultasi';

export default function App() {
  return (
    <View style={styles.container}>
      <Konsultasi />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Greetings, SearchBar, Category, MentorList } from '../../components/index';

export default function Home() {
  return (
    <View style={styles.container}>
        <Greetings />
        <SearchBar />
        <Category />
        <MentorList />  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
 
    
  },
});

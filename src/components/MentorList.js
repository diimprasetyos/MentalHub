import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { colors, fontType } from '../theme';
import mentorData from '../data/mentor-data';
import MentorCard from './MentorCard';

export default function MentorList() {
  return (
    <View style={styles.container}>
    <View style={styles.category}>
        <Text style={styles.heading}>Mentor</Text>
          <Text style={styles.text}>See All</Text>
      </View>
    <FlatList
      horizontal
      contentContainerStyle={{
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      data={mentorData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MentorCard item={item} />}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
      },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 240,
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
});

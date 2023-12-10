import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors, fontType } from '../../theme';
import { ArrowLeft, InfoCircle } from 'iconsax-react-native';
import mentorData from '../../data/mentor-data';

export default function MentorDetails( {route, navigation}) {

  const renderMentorItem = ({ item }) => (
    <View style={styles.mentorContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.category}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black(0.8)} size={24} />
        </TouchableOpacity>
        <Text style={styles.heading}>Mentor</Text>
        <InfoCircle color={colors.black(0.8)} size={24} />
      </View>
      <FlatList
        data={mentorData}
        renderItem={renderMentorItem}
        keyExtractor={(item) => item.id.toString()}
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
    width: '100%',
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
  mentorContainer: {  
    flexDirection: 'row',
    marginTop: 20,
    
    gap: 20,
    alignItems: 'left',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fontType['Itr-Medium'],
    color: colors.black(0.8),
  },
});

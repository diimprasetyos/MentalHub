import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, Animated, TouchableWithoutFeedback, ScrollView, RefreshControl } from 'react-native';
import { ArrowLeft, InfoCircle } from 'iconsax-react-native';
import { colors, fontType } from '../../theme';
import {Edit} from 'iconsax-react-native';
import firestore from '@react-native-firebase/firestore';

export default function Konsultasi({ route, navigation }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 100);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -80],
    extrapolate: 'clamp',
  });

  const [mentorData, setMentorData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const subscriber = firestore()
      .collection('mentor')
      .onSnapshot(querySnapshot => {
        const mentors = [];
        querySnapshot.forEach(documentSnapshot => {
          mentors.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setMentorData(mentors);
      });
    return () => subscriber();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    firestore()
      .collection('mentor')
      .get()
      .then(querySnapshot => {
        const mentors = [];
        querySnapshot.forEach(documentSnapshot => {
          mentors.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setMentorData(mentors);
        setRefreshing(false);
      })
      .catch(error => {
        console.log('Error refreshing data: ', error);
        setRefreshing(false);
      });
  };

   const renderMentorItem = ({ item }) => (
    <TouchableOpacity
      style={styles.mentorContainer}
      onPress={() => navigation.navigate('MentorDetails', { mentorId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.description}</Text>
        <Text style={styles.category}>Price: {item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <Animated.View style={[styles.container, { transform: [{ translateY: recentY }] }]}>
        <View>
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
        <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddMentor')}
      >
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  searchBar: {
    marginTop:20,
    flexDirection: 'row',
    height: 52,
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
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 20,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

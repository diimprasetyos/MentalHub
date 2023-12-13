// MentorDetails.js
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { ArrowLeft, InfoCircle } from 'iconsax-react-native';
import { colors, fontType } from '../../theme';
import axios from 'axios';

export default function MentorDetails({ route, navigation }) {
  const [mentor, setMentor] = useState(null);
  const { mentorId } = route.params;

  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 100);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -80],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    async function fetchMentorData() {
      try {
        const response = await axios.get('https://65789d84f08799dc8045c00a.mockapi.io/mentors');
        const mentorsData = response.data;
        const selectedMentor = mentorsData.find((item) => item.id === mentorId);
        setMentor(selectedMentor);
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    }

    fetchMentorData();
  }, [mentorId]);

  if (!mentor) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleConsultation = () => {
    // Implement your consultation logic here
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: recentY }] }]}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
      >
        <View style={styles.category}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={colors.black(0.8)} size={24} />
          </TouchableOpacity>
          <Text style={styles.heading}>Konsultasi</Text>
          <InfoCircle color={colors.black(0.8)} size={24} />
        </View>
        {mentor && (
          <ScrollView style={styles.mentorContainer}>
            <Image source={{ uri: mentor.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{mentor.title}</Text>
              <Text style={styles.category}>{mentor.detail}</Text>
              <Text style={styles.title}>Rp.{mentor.price}</Text>
              <Text style={styles.text}>{mentor.description}</Text>
              <TouchableOpacity style={styles.consultationButton} onPress={handleConsultation}>
                <Text style={styles.buttonText}>Konsultasi Sekarang</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Animated.ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  // ... your styles
});

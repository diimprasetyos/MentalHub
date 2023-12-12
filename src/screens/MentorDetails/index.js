import React,{useRef} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,Animated } from 'react-native';
import { colors, fontType } from '../../theme';
import { ArrowLeft, InfoCircle } from 'iconsax-react-native';
import mentorData from '../../data/mentor-data';
import { ScrollView } from 'react-native-gesture-handler';

export default function MentorDetails({ route, navigation }) {
    const { mentorId } = route.params;
    const mentor = mentorData.find((item) => item.id === mentorId);

    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 100);
    const recentY = diffClampY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, -80],
        extrapolate: 'clamp',
      });
  const handleConsultation = () => {
  };

  return (
    <Animated.View style={[styles.container, {transform:[{translateY:recentY}]}]}>
      <Animated.ScrollView 
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent:{contentOffset:{y:scrollY}}}],
        {useNativeDriver:true},)}>
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
    marginBottom: 10,
  },
  mentorContainer: {
    marginLeft: 25,
    flexDirection: 'column',
    marginTop: 20,
    
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
    marginRight: 20,
  },
  textContainer: {
    gap: 5,
    width: 300,
    marginTop: 20,
    flexDirection: 'column',
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fontType['Itr-Medium'],
    color: colors.black(0.8),
  },
  consultationButton: {
    borderColor: colors.black,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 0,

  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fontType['Itr-Medium'],
  },
});

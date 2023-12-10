import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, fontType } from '../../theme';


const Profile = () => {
  const userData = {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    status: 'Member',

  };

  return (
    <View style={styles.container}>
        <Image source={{ uri: userData.image }} style={styles.image} />
      <View style={styles.profileInfo}>
        <Text style={styles.value}>{userData.name}</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{userData.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: fontType['Itr-Bold'],
    color: colors.black(),
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    width: 100,
    fontWeight: 'bold',
    color: colors.black(),
  },
  value: {
    flex: 1,
    color: colors.grey(),
  },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
});

export default Profile;

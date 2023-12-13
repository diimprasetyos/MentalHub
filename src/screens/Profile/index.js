import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, fontType } from '../../theme';

const UserProfile = () => {
  const userData = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    image: 'https://via.placeholder.com/200', // Ganti dengan URL foto profil pengguna
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: userData.image }} style={styles.profileImage} />
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userPhone}>{userData.phoneNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 5,
  },
  userPhone: {
    fontSize: 16,
    color: colors.grey,
  },
});

export default UserProfile;

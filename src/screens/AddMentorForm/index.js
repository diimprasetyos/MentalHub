import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { fontType, colors } from "../../theme";
import {categories} from "../../data";
import axios from 'axios';

const AddMentorForm = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [mentorData, setMentorData] = useState({
    title: '',
    price: '',
    description: '',
  });
  const handleChange = (key, value) => {
    setMentorData({
      ...mentorData,
      [key]: value,
    });
  };
  const handleUpload = async () => {
    try {
      const response = await axios.post(
        'https://65789d84f08799dc8045c00a.mockapi.io/mentors',
        {
          title: mentorData.title,
          image,
          price: mentorData.price,
          description: mentorData.description,
        }
      );
      navigation.navigate('MainApp');
    } catch (error) {
      console.error(error);
    }
  };
  const [image, setImage] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Add Mentor</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={textInput.border}>
          <TextInput
            placeholder="Title"
            value={mentorData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.border]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.content}
          />
        </View>
        <View style={[textInput.border]}>
          <TextInput
            placeholder="Price"
            value={mentorData.price}
            onChangeText={(text) => handleChange("price", text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.content}
            keyboardType="numeric"
          />
        </View>
        <View style={[textInput.border]}>
          <TextInput
            placeholder="Description"
            value={mentorData.description}
            onChangeText={(text) => handleChange("description", text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.content}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMentorForm;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType["Itr-Bold"],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: colors.white(),
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.blue(),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType["Itr-SemiBold"],
    color: colors.white(),
  },
});
const textInput = StyleSheet.create({
  border: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  title: {
    fontSize: 16,
    fontFamily: fontType["Itr-SemiBold"],
    color: colors.black(),
    padding: 0,
  },
  content: {
    fontSize: 12,
    fontFamily: fontType["Itr-Regular"],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType["Itr-Regular"],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
    fontFamily: fontType["Itr-Medium"],
  },
});
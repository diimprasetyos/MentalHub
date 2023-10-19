import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Box } from "@react-native-material/core";
import CustomText from "./CustomText";
import RatingStars from "./RatingStars";
import { useNavigation } from "@react-navigation/native";
export default function HomeCourseCard({ item }) {
  const stars = Math.floor(item.stars);
  const navigation = useNavigation();
  // image, title, (instructor, price)
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CourseDetails", {
          item: item,
        });
      }}
    >
      <Box w={200} h={220} minH={140} style={styles.container} key={1}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Box w={"100%"} h={"20%"} style={styles.title}>
          <CustomText
            style={{
              fontSize: 16,
              color: "#000",
              fontFamily: "Gilroy-Regular",
            }}
          >
            {item.title}
          </CustomText>
          <Box w={"100%"} h={"40%"} style={styles.rating}>
            <RatingStars stars={stars} rating={item.stars} />
          </Box>
        </Box>
        <Box w={"100%"} h={"20%"} style={styles.info}>
          <Box style={styles.mentorInfo}>
            <Avatar size={25} image={{ uri: item.instructor.image }} />
            <CustomText
              style={{
                fontSize: 14,
                color: "#000",
                fontFamily: "Gilroy-Regular",
                marginLeft: 5,
              }}
            >
              {item.instructor.name}
            </CustomText>
          </Box>

          <CustomText
            style={{
              fontSize: 14,
              color: "#000",
              fontFamily: "Gilroy-Medium",
            }}
          >
            {item.price}K/{item.duration}
          </CustomText>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
    backgroundColor: "#E5E5E5",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
  image: {
    width: "100%",
    height: "50%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 0,
  },
  info: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  mentorInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Box } from "@react-native-material/core";
import CustomText from "../../components/CustomText";
import HomeCoursesList from "../../components/HomeCoursesList";

export default function Courses() {
  return (
    <Box w={"100%"} h={300} style={styles.container}>
      <CustomText
        style={{
          fontSize: 20,
          fontWeight: "400",
          color: "#000",
          marginBottom: 10,
          fontFamily: "Gilroy-Bold",
        }}
      >
        Popular Courses
      </CustomText>
      <Box w={"100%"} h={"80%"}>
        <HomeCoursesList />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
});

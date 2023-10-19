import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Box, TextInput } from "@react-native-material/core";
import CustomText from "../../components/CustomText";
import SearchCourseBar from "./SearchCourseBar";

export default function Explore() {
  return (
    <SafeAreaView>
      <Box w={"100%"} h={"100%"} style={styles.container}>
        <Box w={"100%"} h={"10%"}>
          <CustomText
            style={{
              fontSize: 24,
              fontWeight: "600",
              color: "#000",
              fontFamily: "Gilroy-Bold",
            }}
          >
            Find Your Mentor
          </CustomText>
          <SearchCourseBar />
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 25,
    paddingLeft: 25,
  },
});

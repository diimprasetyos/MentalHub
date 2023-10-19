import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import CustomText from "./CustomText";

export default function HomeCourseCard({ item }) {
  return (
    <Box w={"45%"} h={90} style={styles.container} key={item.id}>
      <ImageBackground
        source={{ uri: item.image }}
        imageStyle={{ borderRadius: 10 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Box w={"100%"} h={"100%"} style={styles.centered}>
          <CustomText
            style={{
              fontSize: 18,
              fontFamily: "Gilroy-Bold",
              color: "#fff",
            }}
          >
            {item.title}
          </CustomText>
        </Box>
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "2.5%",
    borderRadius: 10,
    position: "relative",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

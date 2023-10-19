import React from "react";
import { Box, Chip, Button } from "@react-native-material/core";
import { ImageBackground, StyleSheet } from "react-native";
import CustomText from "./CustomText";
export default function BannerCarouselItem({ item }) {
  return (
    <Box w={"100%"} h={"100%"}>
      <ImageBackground
        source={item.image}
        imageStyle={{ borderRadius: 20 }}
        style={styles.imageContainer}
      >
        <Box w={"100%"} h={"100%"} style={styles.textContainer}>
          <Box w={"100%"} h={"25%"} style={styles.centerize}>
            <CustomText
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#fff",
                fontFamily: "Gilroy-Bold",
              }}
            >
              {item.label}
            </CustomText>
          </Box>
          <Box w={"100%"} h={"50%"} style={styles.centerize}>
            <CustomText
              style={{
                fontSize: 20,
                fontWeight: "400",
                color: "#fff",
                marginBottom: 10,
                fontFamily: "Gilroy-Bold",
              }}
            >
              {item.text1}
            </CustomText>
            <CustomText
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#fff",

                fontFamily: "Gilroy-Medium",
              }}
            >
              {item.text2}
            </CustomText>
          </Box>
          <Box
            w={"100%"}
            h={"25%"}
            style={{ ...styles.centerize, paddingBottom: 40 }}
          >
            <Chip
              label="Devamını Gör"
              color="#DD2EB6"
              contentContainerStyle={{ backgroundColor: "dodgerblue" }}
              labelStyle={{
                color: "white",
                fontSize: 12,
                fontFamily: "Gilroy-Bold",
              }}
            />
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingLeft: 20,
  },
  centerize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  button: {
    fontFamily: "Gilroy-Bold",
    fontSize: 12,
    color: "white",
  },
});

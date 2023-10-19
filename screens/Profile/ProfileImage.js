import { Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { Box} from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ProfileImage({ id }) {
  return (
    <Box w={80} h={80} style={styles.imageContainer}>
      <ImageBackground
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
        source={{
          uri: `https://picsum.photos/id/${id}/80/80`,
        }}
      >
        <Box style={styles.iconBox}>
          <MaterialCommunityIcons name="pencil" size={12} color="white" />
        </Box>
      </ImageBackground>
    </Box>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "yellow",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  iconBox: {
    width: 20,
    height: 20,
    backgroundColor: "#3D3DD8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "absolute",
    bottom: -3,
    right: -3,
  },
});

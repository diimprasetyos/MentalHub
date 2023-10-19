import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "@react-native-material/core";
import CustomText from "../../components/CustomText";
import HomeCategoriesList from "../../components/HomeCategoriesList";

export default function Categories() {
  return (
    <Box w={"100%"} h={"32%"} maxH={280} style={styles.container}>
      <Box>
        <CustomText
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: "#000",
            marginBottom: 10,
            fontFamily: "Gilroy-Bold",
          }}
        >
          Explore Categories
        </CustomText>
      </Box>

      <HomeCategoriesList />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    paddingTop: "3%",
    display: "flex",
  },
});

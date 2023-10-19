import React from "react";
import { Text, StyleSheet } from "react-native";
import { Box } from "@react-native-material/core";
import CustomText from "./CustomText";

export default function Meta() {
    //3 red boxes for meta

  return (
    <Box style={styles.container}>
        <Box style={styles.box1}>
            <CustomText style={styles.text1}>Meta 1</CustomText>
        </Box>
        <Box style={styles.box2}>
            <CustomText style={styles.text2}>Meta 2</CustomText>
        </Box>
        <Box style={styles.box3}>
            <CustomText style={styles.text3}>Meta 3</CustomText>
        </Box>
    </Box>
    );
}


const styles = StyleSheet.create({
    container: {    
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "red",
  },
  
});

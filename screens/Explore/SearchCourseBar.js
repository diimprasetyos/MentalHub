import { StyleSheet } from "react-native";
import React from "react";
import { Box, TextInput } from "@react-native-material/core";

export default function SearchCourseBar() {
  return (
    <Box w={"100%"} h={"10%"}>
      <TextInput variant="outlined" label="Label" style={styles.input} />
    </Box>
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
  input: {
    borderRadius: 10,
  },
});

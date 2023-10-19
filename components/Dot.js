import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";

export default function Dot({ selectedIndex, itemIndex, scrollTo }) {
  const scroll = () => scrollTo(itemIndex);
  return (
    <TouchableWithoutFeedback onPress={scroll}>
      <Box
        w={8}
        h={8}
        style={{
          borderRadius: 20,
          backgroundColor:
            selectedIndex === itemIndex ? "dodgerblue" : "#CCCCCC",
          marginRight: 5,
          marginLeft: 5,
        }}
      ></Box>
    </TouchableWithoutFeedback>
  );
}

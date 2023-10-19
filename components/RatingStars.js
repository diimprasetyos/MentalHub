import { View, Text } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box } from "@react-native-material/core";
import CustomText from "./CustomText";

export default function RatingStars({ stars, rating }) {
  const remainingStars = Array(5 - stars);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",

        height: "100%",
      }}
    >
      {Array(stars)
        .fill(0)
        .map((_, i) => (
          <Icon key={i} name="star" size={18} color="#eb9834" />
        ))}
      {remainingStars.fill(0).map((_, i) => (
        <Icon key={i} name="star-outline" size={18} color="#eb9834" />
      ))}
      <CustomText
        style={{
          fontSize: 14,
          color: "#eb9834",
          fontFamily: "Gilroy-Bold",
          marginLeft: 5,
          marginTop: 3,
        }}
      >
        {rating}
      </CustomText>
    </Box>
  );
}

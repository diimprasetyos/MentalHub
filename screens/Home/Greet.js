import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomText from "../../components/CustomText";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Greet() {
  return (
    <View style={styles.greet}>
      <View style={styles.greetLeft}>
        <CustomText
          style={{
            fontSize: 24,
            fontWeight: "400",
            color: "#1e90ff",
            marginBottom: 10,
            fontFamily: "Gilroy-Regular",
          }}
        >
          MentalHub
        </CustomText>
        <CustomText
          style={{
            fontSize: 24,
            fontWeight: "400",
            color: "#000",
            marginBottom: 10,
            fontFamily: "Gilroy-Bold",
          }}
        >
          Hi, Dimas
        </CustomText>
      </View>
      <View style={styles.greetRight}>
        <Avatar
          icon={(props) => <Icon name="account" {...props} />}
          color="lightgray"
          tintColor="gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greet: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: "12%",
    marginTop: 50,
  },
});

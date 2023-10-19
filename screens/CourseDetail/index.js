import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CourseDetail({ route }) {
  const { item } = route.params;
  console.log(item.id);
  return (
    <View style={styles.container}>
      <Text>CourseDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import sampleCourseCardData from "../enums/sample-course-card-data";
import HomeCourseCard from "./HomeCourseCard";

export default function HomeCoursesList() {
  return (
    <FlatList
      horizontal
      contentContainerStyle={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
      }}
      data={sampleCourseCardData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <HomeCourseCard item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import Dot from "./Dot";

export default function BannerPaginationDots({
  length,
  selectedIndex,
  scrollTo,
}) {
  return (
    <Box w={"100%"} h={"10%"} maxH={20} style={styles.container}>
      <FlatList
        contentContainerStyle={styles.dotsContainer}
        data={[...new Array(length).keys()]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(index) => index.toString()}
        renderItem={({ index }) => (
          <Dot
            selectedIndex={selectedIndex}
            itemIndex={index}
            scrollTo={scrollTo}
          />
        )}
      />
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

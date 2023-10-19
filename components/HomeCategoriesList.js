import { FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import HomeCategoryCard from "./HomeCategoryCard";
import samplePopularCategories from "../enums/sample-popular-categories";

export default function HomeCategoriesList() {
  return (
    <Box w={"100%"} h={"80%"} style={styles.container}>
      {/* <FlatList
        scrollEnabled={false}
        data={samplePopularCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HomeCategoryCard item={item} />}
        numColumns={2}
      /> */}
      <Image
      style={{width: '100%', height: '100%'}}
          source={{
            uri: 'https://images.unsplash.com/photo-1682686578615-39549501dd08?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {},
});

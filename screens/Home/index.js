import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Greet from "./Greet";
import BannerCarousel from "./BannerCarousel";
import Categories from "./Categories";
import Courses from "./Courses";
// GREET 12 CAROUSEL 25 CATEGORIES 32 COURSE 20 MARGINS 11
export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Greet />
      {/* <BannerCarousel /> */}
      <Categories />
      <Courses />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    display: "flex",
    flexGrow: 0,
    width: "100%",
    height: "130%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 25,
    paddingLeft: 25,
  },
});

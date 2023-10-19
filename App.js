import React from "react";
import { StyleSheet } from "react-native";

import AppStack from "./routes";
export default function App() {
  return <AppStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

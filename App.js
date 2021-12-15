import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/headers";
import Content from "./src/components/content";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

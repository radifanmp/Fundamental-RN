import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import DataMap from "./src/screens/dataWithMap";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <DataMap />
    </View>
  );
}

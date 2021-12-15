import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Form from "./src/screens/form";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <Form />
    </View>
  );
}

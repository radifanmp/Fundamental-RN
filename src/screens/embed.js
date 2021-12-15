import React from "react";
import { View, Text } from "react-native";

export default function EmbedExp() {
  // Make Function
  function getBootcamp() {
    return "Dumbways";
  }

  // tempt data
  const Major = "Full-Stack";
  return (
    <View>
      <Text>
        Welcome to {getBootcamp()} Class {Major}
      </Text>
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";

export default function DataMap() {
  // Create Dummy Data
  const cars = ["BMW", "Toyota", "Jeep", "Lexus"];

  return (
    <View>
      <Text>This is Rendering Data with Map</Text>
      {cars.map((car) => (
        <Text key={car}>{car}</Text>
      ))}
    </View>
  );
}

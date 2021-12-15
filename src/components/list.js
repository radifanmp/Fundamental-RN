import React from "react";
import { View, Text } from "react-native";

// Sending data with Props or Namely Props on the element.
// List(porps) or List({nameProps})

export default function List(props) {
  return (
    <View>
      <Text>{props.listData}</Text>
    </View>
  );
}

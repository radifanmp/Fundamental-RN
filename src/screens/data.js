import React from "react";
import { View, Text, Image } from "react-native";

// Import Component
import List from "../components/list";

export default function Data() {
  // Temp Variable for Data Image
  let pic = {
    uri: "https://static.wikia.nocookie.net/boruto/images/5/54/Boruto_Uzumaki_1.png",
  };

  return (
    <View>
      <Text>On the image element using the default props, namely source</Text>
      <Image source={pic} style={{ widht: "100%", height: 200 }} />

      <List listData="BMW" />
      <List listData="Bugati" />
      <List listData="Toyota" />
    </View>
  );
}

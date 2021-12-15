import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

export default function Greeting() {
  // Create Function Greeting
  function SayHello() {
    return alert("Good Morning Everyone Have a Nice Day");
  }

  return (
    <View>
      <Text>If you Press the Say Hello you can get the Greeting</Text>
      <Pressable onPress={() => SayHello()}>
        <Text>Say Hello</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          alert(
            "Good Morning Everyone Have a Nice Day this function with Arrow Function"
          )
        }
      >
        <Text>Say Hello with Arrow Functon</Text>
      </Pressable>
    </View>
  );
}

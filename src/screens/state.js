import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function State() {
  // init State
  const [counter, setCounter] = useState(0);

  // Create Function Increment
  function Increment() {
    return setCounter(counter + 1);
  }

  // Create Function Decrement
  function Decrement() {
    return setCounter(counter - 1);
  }

  return (
    <View>
      <Text>
        If You click the Increment Button it will Incress Data by One, vice
        versa if you click the Decrement Button it will be Decres By One
      </Text>

      <Text
        style={{
          fontSize: 50,
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {counter}
      </Text>

      <Pressable onPress={Increment} style={{ backgroundColor: "#2ecc71" }}>
        <Text style={{ color: "#FFF", textAlign: "center" }}>Increment</Text>
      </Pressable>
      <Pressable
        onPress={Decrement}
        style={{
          backgroundColor: "#e74c3c",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#FFF", textAlign: "center" }}>Decrement</Text>
      </Pressable>
    </View>
  );
}

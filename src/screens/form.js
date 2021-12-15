import React from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";

export default function Form() {
  return (
    <View style={style.container}>
      <Text style={style.headers}>Sign In</Text>

      <Text style={style.textStyle}>Email</Text>
      <TextInput
        style={style.textInput}
        defaultValue="ex.radifan@dumbways.id"
      />

      <Text style={style.textStyle}>Password</Text>
      <TextInput style={style.textInput} defaultValue="ex.9e0o0Q!" />

      <Pressable style={style.button}>
        <Text style={style.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

// Create CSS

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headers: {
    color: "#1abc9c",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },

  textStyle: {
    color: "#95a5a6",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },

  textInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    color: "#95a5a6",
    borderColor: "#95a5a6",
  },

  button: {
    backgroundColor: "#1abc9c",
    height: 45,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

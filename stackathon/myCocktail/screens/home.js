import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <TouchableOpacity
        style={globalStyles.roundButton}
        onPress={() => navigation.navigate("CocktailView")}
      >
        <Text style={style.fizz}>Welcome to Fizz</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  fizz: {
    fontSize: 25,
    color: "white"
  }
});

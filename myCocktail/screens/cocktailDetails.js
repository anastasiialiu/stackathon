import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function CocktailDetails({ navigation }) {
  const ingredient = navigation.getParam("ingredients");

  console.log(ingredient, "INGREDFYGJ");
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{navigation.getParam("name")}</Text>
      <Image
        source={{ uri: navigation.getParam("img") }}
        style={{
          margin: 3,
          height: 110,
          width: 110
        }}
      />
      <Text style={globalStyles.ingredients}>Ingredients: </Text>
      <Text style={globalStyles.text}>
        {" "}
        {navigation
          .getParam("ingredients")
          .map(ingredient => ingredient.concat(", "))}
      </Text>
      <Text style={globalStyles.instructions}>Instructions: </Text>
      <Text style={globalStyles.text}>
        {navigation.getParam("instructions")}
      </Text>
    </View>
  );
}

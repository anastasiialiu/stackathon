import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
    padding: 35
  },
  roundButton: {
    margin: 250,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 100,
    backgroundColor: "coral",
    borderRadius: 100
  },
  titleText: {
    fontFamily: "nunito-bold",
    padding: 28
  },
  paragraph: {
    marginVertical: 10,
    lineHeight: 20
  },
  text: {
    padding: 10,
    fontSize: 15
  },
  ingredients: {
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 15
  },
  instructions: {
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 15
  }
});

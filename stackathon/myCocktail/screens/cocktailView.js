import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import {
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native-gesture-handler";

export default class CocktailView extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
    );
    const json = await response.json();
    console.log(json, "JSON");
    this.setState({ isLoading: false, data: json });
  };

  render() {
    console.log(this.state.data, "drink");
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.data.drinks}
            keyExtractor={item => item.idDrink}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("CocktailDetails", {
                    img: item.strDrinkThumb,
                    name: item.strDrink,
                    ingredients: [
                      item.strIngredient1,

                      item.strIngredient2,

                      item.strIngredient3
                    ],
                    instructions: item.strInstructions
                  })
                }
              >
                <Image
                  source={{ uri: item.strDrinkThumb }}
                  style={{
                    margin: 3,
                    height: 110,
                    width: 110
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    backgroundColor: "white"
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    flex: 1
  }
});

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import CocktailDetails from "../screens/cocktailDetails";
import CocktailView from "../screens/cocktailView";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Fizz"
    }
  },
  CocktailView: {
    screen: CocktailView,
    navigationOptions: {
      title: "Cocktails"
    },
    backgroundColor: "white"
  },

  CocktailDetails: {
    screen: CocktailDetails,
    navigationOptions: {
      title: "Cocktail Details"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "white",
      height: 80
    }
  }
});

export default createAppContainer(HomeStack);

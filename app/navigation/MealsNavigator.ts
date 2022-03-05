import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "constants/colors";

import CategoriesScreen from "screens/CategoriesScreen";
import CategoryMealsScreen from "screens/CategoryMealsScreen";
import MealDetailScreen from "screens/MealDetailScreen";

const MealNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
			},
			headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
		},
		
	}
);

export default createAppContainer(MealNavigator);

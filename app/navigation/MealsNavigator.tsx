import { StyleSheet, Platform, View, ViewStyle } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "constants/colors";

import CategoriesScreen, {
	screenOptions as CategoriesOptions,
} from "screens/CategoriesScreen";
import CategoryMealsScreen, {
	screenOptions as CategoryMealOptions,
} from "screens/CategoryMealsScreen";
import MealDetailScreen, {
	screenOptions as MealDetailOptions,
} from "screens/MealDetailScreen";

export type MealParamList = {
	Categories: undefined;
	CategoryMeals: {
		categoryId: string;
	};
	MealDetail: {
		mealId: string;
		mealTitle: string;
	};
};

const MyStack = createNativeStackNavigator<MealParamList>();

const MealsNavigator: React.FC = () => {
	return (
		<View style={styles.stackContainer} collapsable={false}>
			<MyStack.Navigator
				initialRouteName="Categories"
				screenOptions={{
					headerStyle: {
						backgroundColor:
							Platform.OS === "android" ? Colors.primary : "white",
					},
					headerTitleStyle: {
						fontFamily: "open-sans-bold",
					},
					headerBackTitleStyle: {
						fontFamily: "open-sans",
					},
					headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
				}}
			>
				<MyStack.Screen
					name="Categories"
					component={CategoriesScreen}
					options={CategoriesOptions}
				/>
				<MyStack.Screen
					name="CategoryMeals"
					component={CategoryMealsScreen}
					options={CategoryMealOptions}
				/>
				<MyStack.Screen
					name="MealDetail"
					component={MealDetailScreen}
					options={MealDetailOptions}
				/>
			</MyStack.Navigator>
		</View>
	);
};

export default MealsNavigator;

interface Styles {
	stackContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	stackContainer: {
		flex: 1,
	},
});

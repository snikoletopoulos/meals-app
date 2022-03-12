import { Platform, View } from "react-native";
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
	};
};

const MyStack = createNativeStackNavigator<MealParamList>();

const MealsNavigator: React.FC = () => {
	return (
		<View style={{ flex: 1 }} collapsable={false}>
			<MyStack.Navigator
				initialRouteName="Categories"
				screenOptions={{
					headerStyle: {
						backgroundColor:
							Platform.OS === "android" ? Colors.primary : "white",
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

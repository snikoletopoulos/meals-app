import { Text, View, Button } from "react-native";
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { MealParamList } from "navigation/MealsNavigator";
import { MEALS } from "data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "components/HeaderButton";

type Props = NativeStackScreenProps<MealParamList, "MealDetail">;

const MealDetailScreen: React.FC<Props> = props => {
	const mealId = props.route.params.mealId;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return (
		<View>
			<Text>MealDetailScreen</Text>
			<Text>{selectedMeal?.title}</Text>
			<Button
				title="Go back"
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
		</View>
	);
};

export const screenOptions = (navigationData): NativeStackNavigationOptions => {
	const mealId = navigationData.route.params.mealId;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return {
		headerTitle: selectedMeal?.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => {
						console.log("mark as favorite");
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default MealDetailScreen;

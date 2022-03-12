import { useMemo } from "react";
import {
	NativeStackScreenProps,
	NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { MEALS } from "data/dummy-data";

import { TabParamList } from "navigation/TabNavigator";
import MealList from "components/MealList";

type Props = NativeStackScreenProps<TabParamList, "Favorites">;

const FavoritesScreen: React.FC<Props> = props => {
	const handleMealSelect = (mealId: string) => {
		props.navigation.navigate("Favorites", {
			screen: "MealScreen",
			params: { mealId },
		});
	};

	const favoriteMeals = useMemo(
		() => MEALS.filter(meal => ["m1", "m2"].includes(meal.id)),
		[]
	);

	return <MealList meals={favoriteMeals} onSelectMeal={handleMealSelect} />;
};

export const screenOptions: NativeStackNavigationOptions = {
	headerTitle: "Your Favorites",
};

export default FavoritesScreen;

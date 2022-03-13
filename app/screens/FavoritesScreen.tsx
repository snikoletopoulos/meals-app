import { useMemo } from "react";
import {
	NativeStackScreenProps,
	NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { MEALS } from "data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "components/HeaderButton";
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

export const screenOptions = (navigationData): NativeStackNavigationOptions => {
	return {
		headerTitle: "Your Favorites",
		headerLeft: props => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					color={props.tintColor}
					iconName="ios-menu"
					onPress={() => {
						navigationData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default FavoritesScreen;

import { useMemo } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useSelector } from "helpers/store";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FavoritesParamList } from "navigation/FavoritesNavigator";

import HeaderButton from "components/HeaderButton";
import MealList from "components/MealList";
import BaseText from "components/BaseText";

type Props = NativeStackScreenProps<FavoritesParamList, "FavoritesScreen">;

const FavoritesScreen: React.FC<Props> = props => {
	const favoriteMealsIds = useSelector(state => state.meals.favoriteMeals);
	const meals = useSelector(state => state.meals.meals);

	if (!favoriteMealsIds.length) {
		return (
			<View style={styles.content}>
				<BaseText>No favorite meals found. Start adding some!</BaseText>
			</View>
		);
	}

	const favoriteMeals = useMemo(
		() =>
			favoriteMealsIds.map(id => {
				const meal = meals.find(meal => meal.id === id);
				if (!meal) throw new Error("Meal not found");
				return meal;
			}),
		[favoriteMealsIds, meals]
	);

	const navigate = (params: FavoritesParamList["MealScreen"]) => {
		props.navigation.navigate("MealScreen", params);
	};

	return <MealList meals={favoriteMeals} navigate={navigate} />;
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

interface Styles {
	content: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

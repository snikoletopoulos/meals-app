import { useLayoutEffect } from "react";
import {
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
	Image,
	ImageStyle,
	ScrollView,
} from "react-native";
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "helpers/store";

import { MealParamList } from "navigation/MealsNavigator";
import { FavoritesParamList } from "navigation/FavoritesNavigator";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { actions } from "store/meals/reducers";

import HeaderButton from "components/HeaderButton";
import BaseText from "components/BaseText";

type Props =
	| NativeStackScreenProps<MealParamList, "MealDetail">
	| NativeStackScreenProps<FavoritesParamList, "MealScreen">;

const MealDetailScreen: React.FC<Props> = props => {
	const dispatch = useDispatch();

	const mealId = props.route.params.mealId;
	const availableMeal = useSelector(state => state.meals.meals);
	const isFavorite = useSelector(state =>
		state.meals.favoriteMeals.some(mealId => mealId === mealId)
	);

	const selectedMeal = availableMeal.find(meal => meal.id === mealId);

	if (!selectedMeal) {
		throw new Error("Meal not found");
	}

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="Favorite"
						iconName={isFavorite ? "ios-star" : "ios-star-outline"}
						onPress={() => {
							dispatch(actions.toggleFavourite(selectedMeal.id));
						}}
					/>
				</HeaderButtons>
			),
		});
	}, []);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<BaseText>{selectedMeal.duration}m</BaseText>
				<BaseText>{selectedMeal.complexity.toUpperCase()}</BaseText>
				<BaseText>{selectedMeal.affordability.toUpperCase()}</BaseText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map(ingredient => (
				<View key={ingredient} style={styles.listItem}>
					<BaseText>{ingredient}</BaseText>
				</View>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map(step => (
				<View key={step} style={styles.listItem}>
					<BaseText>{step}</BaseText>
				</View>
			))}
		</ScrollView>
	);
};

export const screenOptions = (navigationData): NativeStackNavigationOptions => {
	const mealTitle = navigationData.route.params.mealTitle;

	return {
		headerTitle: mealTitle,
	};
};

export default MealDetailScreen;

interface Styles {
	image: ImageStyle;
	details: ViewStyle;
	title: TextStyle;
	listItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	image: {
		width: "100%",
		height: 200,
	},

	details: {
		flexDirection: "row",
		padding: 15,
		justifyContent: "space-around",
	},

	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "center",
	},

	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 10,
	},
});

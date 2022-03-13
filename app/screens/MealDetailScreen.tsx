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
import { useSelector } from "helpers/store";

import { MealParamList } from "navigation/MealsNavigator";
import { MEALS } from "data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "components/HeaderButton";
import BaseText from "components/BaseText";

type Props = NativeStackScreenProps<MealParamList, "MealDetail">;

const MealDetailScreen: React.FC<Props> = props => {
	const mealId = props.route.params.mealId;
	const selectedMeal = useSelector(state =>
		state.meals.meals.find(meal => meal.id === mealId)
	);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<BaseText>{selectedMeal?.duration}m</BaseText>
				<BaseText>{selectedMeal?.complexity.toUpperCase()}</BaseText>
				<BaseText>{selectedMeal?.affordability.toUpperCase()}</BaseText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal?.ingredients.map(ingredient => (
				<View key={ingredient} style={styles.listItem}>
					<BaseText>{ingredient}</BaseText>
				</View>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal?.steps.map(step => (
				<View key={step} style={styles.listItem}>
					<BaseText>{step}</BaseText>
				</View>
			))}
		</ScrollView>
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

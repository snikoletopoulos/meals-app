import { useMemo } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useSelector } from "helpers/store";

import { MealParamList } from "navigation/MealsNavigator";
import { CATEGORIES } from "data/dummy-data";

import MealList from "components/MealList";
import BaseText from "components/BaseText";

type Props = NativeStackScreenProps<MealParamList, "CategoryMeals">;

const CategoryMealsScreen: React.FC<Props> = props => {
	const categoryId = props.route.params.categoryId;
	const availableMeals = useSelector(state => state.meals.filteredMeals);

	const displayedMeals = useMemo(
		() => availableMeals.filter(meal => meal.categoryIds.includes(categoryId)),
		[availableMeals, categoryId]
	);

	if (!displayedMeals.length) {
		return (
			<View style={styles.content}>
				<BaseText>No meals found, maybe check your filters.</BaseText>
			</View>
		);
	}

	const navigate = (params: MealParamList["MealDetail"]) => {
		props.navigation.navigate("MealDetail", params);
	};

	return <MealList meals={displayedMeals} navigate={navigate} />;
};

export const screenOptions = (navigationData): NativeStackNavigationOptions => {
	const categoryId = navigationData.route.params.categoryId;

	const selectedCategory = CATEGORIES.find(
		category => category.id === categoryId
	);

	return {
		headerTitle: selectedCategory?.title ?? "",
	};
};

export default CategoryMealsScreen;

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

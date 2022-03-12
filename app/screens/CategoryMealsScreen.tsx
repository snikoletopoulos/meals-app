import { useMemo } from "react";
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { MealParamList } from "navigation/MealsNavigator";
import { CATEGORIES, MEALS } from "data/dummy-data";

import MealList from "components/MealList";

type Props = NativeStackScreenProps<MealParamList, "CategoryMeals">;

const CategoryMealsScreen: React.FC<Props> = props => {
	const categoryId = props.route.params.categoryId;

	const handleMealSelect = (mealId: string) => {
		props.navigation.navigate("MealDetail", {
			mealId,
		});
	};

	const displayedMeals = useMemo(
		() => MEALS.filter(meal => meal.categoryIds.includes(categoryId)),
		[categoryId]
	);

	return <MealList meals={displayedMeals} onSelectMeal={handleMealSelect} />;
};

export const screenOptions: NativeStackNavigationOptions = navigationData => {
	const categoryId = navigationData.route.params.categoryId;

	const selectedCategory = CATEGORIES.find(
		category => category.id === categoryId
	);

	return {
		headerTitle: selectedCategory?.title,
	};
};

export default CategoryMealsScreen;

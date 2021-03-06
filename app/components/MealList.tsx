import { useCallback } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	ViewStyle,
	ListRenderItem,
} from "react-native";
import { MealParamList } from "navigation/MealsNavigator";
import { FavoritesParamList } from "navigation/FavoritesNavigator";

import Meal from "models/meal";
import MealItem from "./MealItem";

interface Props {
	meals: Meal[];
	navigate: (
		params: FavoritesParamList["MealScreen"] | MealParamList["MealDetail"]
	) => void;
}

const MealList: React.FC<Props> = props => {
	const handleMealSelect = useCallback((mealId: string, mealTitle: string) => {
		props.navigate({ mealId, mealTitle });
	}, []);

	const renderMealItem: ListRenderItem<Meal> = useCallback(
		itemData => {
			return (
				<MealItem
					title={itemData.item.title}
					duration={itemData.item.duration}
					complexity={itemData.item.complexity}
					affordability={itemData.item.affordability}
					image={itemData.item.imageUrl}
					onSelectMeal={() =>
						handleMealSelect(itemData.item.id, itemData.item.title)
					}
				/>
			);
		},
		[handleMealSelect]
	);

	return (
		<View style={styles.screen}>
			<FlatList
				data={props.meals}
				keyExtractor={item => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealList;

interface Styles {
	screen: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
	},
});

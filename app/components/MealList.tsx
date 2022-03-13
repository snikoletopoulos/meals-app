import { useCallback } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	ViewStyle,
	ListRenderItem,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Meal from "models/meal";
import MealItem from "./MealItem";

interface Props {
	meals: Meal[];
}

const MealList: React.FC<Props> = props => {
	const navigation = useNavigation();

	const handleMealSelect = useCallback(
		(mealId: string, mealTitle: string) => {
			navigation.navigate("Favorites", {
				screen: "MealScreen",
				params: {
					mealId,
					mealTitle,
				},
			});
		},
		[navigation.navigate]
	);

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

import {
	StyleSheet,
	Text,
	View,
	FlatList,
	ViewStyle,
	ListRenderItem,
} from "react-native";

import Meal from "models/meal";
import MealItem from "./MealItem";

interface Props {
	meals: Meal[];
	onSelectMeal: (mealId: string) => void;
}

const MealList: React.FC<Props> = props => {
	const renderMealItem: ListRenderItem<Meal> = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imageUrl}
				onSelectMeal={props.onSelectMeal.bind(null, itemData.item.id)}
			/>
		);
	};

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

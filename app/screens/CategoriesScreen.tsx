import { FlatList, ListRenderItem } from "react-native";
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";

import {MealParamList} from "navigation/MealsNavigator"
import Category from "models/category";
import { CATEGORIES } from "data/dummy-data";

import CategoryGridTile from "components/CategoryGridTile";

type Props = NativeStackScreenProps<MealParamList, "Categories">

const CategoriesScreen: React.FC<Props> = props => {
	const renderGridItem: ListRenderItem<Category> = itemData => {
		const handleCategorySelect = () => {
			props.navigation.navigate("CategoryMeals", {
				categoryId: itemData.item.id,
			});
		};

		return (
			<CategoryGridTile
				title={itemData.item.title}
				onSelect={handleCategorySelect}
				color={itemData.item.color}
			/>
		);
	};

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

export const screenOptions: NativeStackNavigationOptions = {
	headerTitle: "Meal Categories",
};

export default CategoriesScreen;

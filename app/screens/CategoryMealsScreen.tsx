import { StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

type Props = {};

const CategoryMealsScreen: React.FC<Props> = props => {
	const categoryId = props.navigation.getParam("categoryId");

	const selectedCategory = CATEGORIES.find(
		category => category.id === categoryId
	);

	return (
		<View>
			<Text>THe Category Meals Screen!</Text>
			<Text>{selectedCategory?.title}</Text>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = navigationData => {
	const categoryId = navigationData.navigation.getParam("categoryId");

	const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

	return {
		headerTitle: selectedCategory?.title,
	}
};

export default CategoryMealsScreen;

interface Styles {}

const styles = StyleSheet.create<Styles>({});

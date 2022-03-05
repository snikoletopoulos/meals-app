import {
	StyleSheet,
	Text,
	View,
	ViewStyle,
	FlatList,
	ListRenderItem,
	TouchableOpacity,
	Platform,
} from "react-native";

import Category from "models/category";
import { NavigationScreenProp } from "react-navigation";
import Colors from "constants/colors";
import { CATEGORIES } from "../data/dummy-data";

interface Props {
	[key: string]: any;
}

const CategoriesScreen: React.FC<Props> = props => {
	const renderGridItem: ListRenderItem<Category> = itemData => {
		const handleCategorySelect = () => {
			props.navigation.navigate({
				routeName: "CategoryMeals",
				params: {
					categoryId: itemData.item.id,
				},
			});
		};

		return (
			<TouchableOpacity style={styles.gridItem} onPress={handleCategorySelect}>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: "Meal Categories",
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
	},
	headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

export default CategoriesScreen;

interface Styles {
	screen: ViewStyle;
	gridItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});

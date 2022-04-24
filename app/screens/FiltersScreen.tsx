import { useCallback, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useDispatch } from "helpers/store";

import { actions } from "store/meals/reducers";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import FilterSwitch from "components/FilterSwitch";
import HeaderButton from "components/HeaderButton";
import { FiltersParamList } from "navigation/FiltersNavigator";

type Props = NativeStackScreenProps<FiltersParamList, "FiltersScreen">;

const FiltersScreen: React.FC<Props> = props => {
	const dispatch = useDispatch();

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			isGlutenFree,
			isLactoseFree,
			isVegan,
			isVegetarian,
		};

		dispatch(actions.setFilterts(appliedFilters));
		props.navigation.goBack();
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerRight: props => (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="Menu"
						color={props.tintColor}
						iconName="ios-save"
						onPress={saveFilters}
					/>
				</HeaderButtons>
			),
		});
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				label="Gluten-free"
				value={isGlutenFree}
				onChange={setIsGlutenFree}
			/>
			<FilterSwitch
				label="Lactose-free"
				value={isLactoseFree}
				onChange={setIsLactoseFree}
			/>
			<FilterSwitch label="Vegan" value={isVegan} onChange={setIsVegan} />
			<FilterSwitch
				label="Vegetarian"
				value={isVegetarian}
				onChange={setIsVegetarian}
			/>
		</View>
	);
};

export const screenOptions = (navigationData): NativeStackNavigationOptions => {
	return {
		headerTitle: "Filtered Meals",
		headerLeft: props => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					color={props.tintColor}
					iconName="ios-menu"
					onPress={() => {
						navigationData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};
export default FiltersScreen;

interface Styles {
	screen: ViewStyle;
	title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	screen: {
		flex: 1,
		alignItems: "center",
	},

	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		margin: 20,
		textAlign: "center",
	},
});

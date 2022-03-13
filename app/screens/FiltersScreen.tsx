import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "components/HeaderButton";
import { FiltersParamList } from "navigation/FiltersNavigator";

type Props = NativeStackScreenProps<FiltersParamList, "Filters">;

const FiltersScreen: React.FC<Props> = props => {
	return (
		<View>
			<Text>FiltersScreen</Text>
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

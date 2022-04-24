import { StyleSheet, Platform, View, ViewStyle } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "constants/colors";

import FavoritesScreen, {
	screenOptions as FavoritesOptions,
} from "screens/FavoritesScreen";
import MealDetailScreen, {
	screenOptions as MealDetailOptions,
} from "screens/MealDetailScreen";

export type FavoritesParamList = {
	FavoritesScreen: undefined;
	MealScreen: {
		mealId: string;
		mealTitle: string;
	};
};

const Stack = createNativeStackNavigator<FavoritesParamList>();

const FavoritesNavigator: React.FC = () => {
	const { Navigator, Screen } = Stack;

	return (
		<View style={styles.stackContainer} collapsable={false}>
			<Navigator
				initialRouteName="FavoritesScreen"
				screenOptions={{
					headerStyle: {
						backgroundColor:
							Platform.OS === "android" ? Colors.accent : "white",
					},
					headerTitleStyle: {
						fontFamily: "open-sans-bold",
					},
					headerBackTitleStyle: {
						fontFamily: "open-sans",
					},
					headerTintColor: Platform.OS === "android" ? "white" : Colors.accent,
				}}
			>
				<Screen
					name="FavoritesScreen"
					component={FavoritesScreen}
					options={FavoritesOptions}
				/>
				<Screen
					name="MealScreen"
					component={MealDetailScreen}
					options={MealDetailOptions}
				/>
			</Navigator>
		</View>
	);
};

export default FavoritesNavigator;

interface Styles {
	stackContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	stackContainer: {
		flex: 1,
	},
});

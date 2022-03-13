import { Platform, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "constants/colors";

import FavoritesScreen from "screens/FavoritesScreen";
import MealDetailScreen from "screens/MealDetailScreen";

export type FavoritesParamList = {
	FavoritesScreen: undefined;
	MealScreen: {
		mealId: string;
	};
};

const Stack = createNativeStackNavigator<FavoritesParamList>();

const FavoritesNavigator: React.FC = () => {
	const { Navigator, Screen } = Stack;

	return (
		<View style={{ flex: 1 }} collapsable={false}>
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
				<Screen name="FavoritesScreen" component={FavoritesScreen} />
				<Screen name="MealScreen" component={MealDetailScreen} />
			</Navigator>
		</View>
	);
};

export default FavoritesNavigator;

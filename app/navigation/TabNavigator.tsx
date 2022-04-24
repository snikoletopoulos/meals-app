import { Platform, Text, StyleSheet, TextStyle } from "react-native";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "constants/colors";
import { MealParamList } from "navigation/MealsNavigator";
import FavoritesNavigator, {
	FavoritesParamList,
} from "navigation/FavoritesNavigator";

import MealsNavigator from "navigation/MealsNavigator";

export type TabParamList = {
	Meals: NavigatorScreenParams<MealParamList>;
	Favorites: NavigatorScreenParams<FavoritesParamList>;
};

const Tab = createBottomTabNavigator<TabParamList>();
const MaterialTab = createMaterialBottomTabNavigator<TabParamList>();

interface Styles {
	text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	text: {
		fontFamily: "open-sans-bold",
	},
});

const navigatorOptions: React.ComponentProps<typeof Tab["Navigator"]> &
	React.ComponentProps<typeof MaterialTab["Navigator"]> = {
	initialRouteName: "Meals",
	activeColor: "white",
	shifting: true,
	barStyle: {
		backgroundColor: Colors.primary,
	},
	screenOptions: {
		headerShown: false,
		tabBarColor: Colors.primary,
		tabBarLabelStyle: {
			fontFamily: "open-sans",
		},
	},
};

const navScreens: (React.ComponentProps<typeof Tab["Screen"]> &
	React.ComponentProps<typeof MaterialTab["Screen"]>)[] = [
	{
		name: "Meals",
		component: MealsNavigator,
		options: {
			tabBarIcon: tabInfo => (
				<Ionicons
					name="ios-star"
					color={tabInfo.color}
					size={tabInfo.size ?? 20}
				/>
			),
			tabBarLabel:
				Platform.OS === "android" ? (
					<Text style={styles.text}>Meals</Text>
				) : (
					"Meals"
				),
		},
	},
	{
		name: "Favorites",
		component: FavoritesNavigator,
		options: {
			tabBarColor: Colors.accent,
			tabBarIcon: tabInfo => (
				<Ionicons
					name="ios-restaurant"
					color={tabInfo.color}
					size={tabInfo.size ?? 20}
				/>
			),
			tabBarLabel:
				Platform.OS === "android" ? (
					<Text style={styles.text}>Favorites</Text>
				) : (
					"Favorites"
				),
		},
	},
];

const TabNavigator: React.FC = () => {
	if (Platform.OS === "android") {
		return (
			<MaterialTab.Navigator {...navigatorOptions}>
				{navScreens.map(screen => (
					<MaterialTab.Screen key={screen.name} {...screen} />
				))}
			</MaterialTab.Navigator>
		);
	}

	return (
		<Tab.Navigator {...navigatorOptions}>
			{navScreens.map(screen => (
				<Tab.Screen key={screen.name} {...screen} />
			))}
		</Tab.Navigator>
	);
};

export default TabNavigator;

import { Platform } from "react-native";
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

const navigatorOptions = {
	initialRouteName: "Meals",
	activeColor: "white",
	shifting: true,
	barStyle: {
		backgroundColor: Colors.primary,
	},
	options: {
		tabBarActiveTintColor: Colors.primary,
		headerShown: false,
	},
	screenOptions: {
		tabBarColor: Colors.primary,
	},
};

const navScreens = [
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

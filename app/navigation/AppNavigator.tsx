import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	NavigationContainer,
	NavigatorScreenParams,
} from "@react-navigation/native";

import Colors from "constants/colors";

import TabNavigator, { TabParamList } from "navigation/TabNavigator";
import FiltersNavigator, { FiltersParamList } from "./FiltersNavigator";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends TabParamList {}
	}
}

type DrawerParamList = {
	MealsFavs: NavigatorScreenParams<TabParamList>;
	Filters: NavigatorScreenParams<FiltersParamList>;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const AppNavigator: React.FC = () => {
	const { Navigator, Screen } = Drawer;

	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
					drawerActiveTintColor: Colors.accent,
					drawerLabelStyle: {
						fontFamily: "open-sans-bold",
					},
				}}
			>
				<Screen
					name="MealsFavs"
					component={TabNavigator}
					options={{
						title: "Meals",
					}}
				/>
				<Screen
					name="Filters"
					component={FiltersNavigator}
					options={{
						title: "Filters",
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

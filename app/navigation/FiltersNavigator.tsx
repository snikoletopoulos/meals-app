import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "constants/colors";

import FiltersScreen, {
	screenOptions as FiltersOptions,
} from "screens/FiltersScreen";

export type FiltersParamList = {
	FiltersScreen: {
		save: () => void;
	};
};

const Stack = createNativeStackNavigator<FiltersParamList>();

const FiltersNavigator: React.FC = () => {
	const { Navigator, Screen } = Stack;

	return (
		<Navigator
			initialRouteName="FiltersScreen"
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
				},
				headerTitleStyle: {
					fontFamily: "open-sans-bold",
				},
				headerBackTitleStyle: {
					fontFamily: "open-sans",
				},
				headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
			}}
		>
			<Screen
				name="FiltersScreen"
				component={FiltersScreen}
				options={FiltersOptions}
			/>
		</Navigator>
	);
};

export default FiltersNavigator;

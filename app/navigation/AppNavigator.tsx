import { NavigationContainer } from "@react-navigation/native";

import TabNavigator, { TabParamList } from "navigation/TabNavigator";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends TabParamList {}
	}
}

const AppNavigator: React.FC = () => {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;

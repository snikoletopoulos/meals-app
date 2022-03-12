import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";

import AppNavigator from "navigation/AppNavigator";

enableScreens(true);

const fetchFonts = async () => {
	return Font.loadAsync({
		"open-sans": require("assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("assets/fonts/OpenSans-Bold.ttf"),
	});
};

const App = () => {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={error => console.log(error)}
			/>
		);
	}

	return <AppNavigator />;
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

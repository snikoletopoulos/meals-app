import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import MealsNavigator from "navigation/MealsNavigator";

enableScreens(true);

const fetchFonts = async () => {
	Font.loadAsync({
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

	return <MealsNavigator />;
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

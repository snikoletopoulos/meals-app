import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";

const BaseText: React.FC = () => {
	return <Text style={styles.text}>BaseText</Text>;
};

export default BaseText;

const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans",
	},
});

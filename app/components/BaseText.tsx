import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";

const BaseText: React.FC<TextProps> = props => {
	return (
		<Text {...props} style={[styles.text, props.style]}>
			{props.children}
		</Text>
	);
};

export default BaseText;

const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans",
	},
});

import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";

const BaseText: React.FC = props => {
	return <Text style={styles.text}>{props.children}</Text>;
};

export default BaseText;

const styles = StyleSheet.create({
	text: {
		fontFamily: "open-sans",
	},
});

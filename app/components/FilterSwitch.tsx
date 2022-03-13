import {
	StyleSheet,
	Text,
	Switch,
	Platform,
	ViewStyle,
	View,
} from "react-native";

import Colors from "constants/colors";

interface Props {
	label: string;
	value: boolean;
	onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSwitch: React.FC<Props> = props => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{
					true: Colors.primary,
				}}
				thumbColor={Platform.OS === "android" ? Colors.accent : ""}
				value={props.value}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

export default FilterSwitch;

interface Styles {
	filterContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	filterContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginVertical: 15,
	},
});

import {
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
	TouchableOpacity,
	Platform,
	TouchableNativeFeedback,
} from "react-native";

interface Props {
	title: string;
	color: string;
	onSelect: () => void;
}

const CategoryGridTile: React.FC<Props> = props => {
	let TouchableCmp: any = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			<TouchableCmp style={styles.screen} onPress={props.onSelect}>
				<View style={[{ backgroundColor: props.color }, styles.container]}>
					<Text style={styles.title} numberOfLines={2}>
						{props.title}
					</Text>
				</View>
			</TouchableCmp>
		</View>
	);
};

export default CategoryGridTile;

interface Styles {
	gridItem: ViewStyle;
	screen: ViewStyle;
	container: ViewStyle;
	title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	screen: {
		flex: 1,
	},

	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		overflow:
			Platform.OS === "android" && Platform.Version >= 21
				? "hidden"
				: "visible",
		elevation: 5,
	},

	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		padding: 15,
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},

	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		textAlign: "right",
	},
});

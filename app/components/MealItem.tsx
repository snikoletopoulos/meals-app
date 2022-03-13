import {
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
	TouchableOpacity,
	ImageBackground,
	ImageStyle,
} from "react-native";

import BaseText from "components/BaseText";

interface Props {
	title: string;
	duration: number;
	complexity: string;
	affordability: string;
	image: string;
	onSelectMeal: () => void;
}

const MealItem: React.FC<Props> = props => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={[styles.mealRow, styles.mealHeader]}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={[styles.mealRow, styles.mealDetails]}>
						<BaseText>{props.duration}m</BaseText>
						<BaseText>{props.complexity.toUpperCase()}</BaseText>
						<BaseText>{props.affordability.toUpperCase()}</BaseText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MealItem;

interface Styles {
	mealRow: ViewStyle;
	mealItem: ViewStyle;
	mealHeader: ViewStyle;
	mealDetails: ViewStyle;
	bgImage: ImageStyle;
	titleContainer: ViewStyle;
	title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		overflow: "hidden",
		marginVertical: 10,
	},

	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},

	titleContainer: {
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingVertical: 5,
		paddingHorizontal: 12,
	},

	title: {
		fontFamily: "open-sans-bold",
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},

	mealRow: {
		flexDirection: "row",
	},

	mealHeader: {
		height: "85%",
	},

	mealDetails: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		height: "15%",
	},
});

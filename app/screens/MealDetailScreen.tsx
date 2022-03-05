import { StyleSheet, Text, View, Button } from "react-native";

type Props = {};

const MealDetailScreen: React.FC<Props> = props => {
	return (
		<View>
			<Text>MealDetailScreen</Text>
			<Button title="Go back" onPress={()=> {
				props.navigation.popToTop();
			}} />
		</View>
	);
};

export default MealDetailScreen;

interface Styles {}

const styles = StyleSheet.create<Styles>({});

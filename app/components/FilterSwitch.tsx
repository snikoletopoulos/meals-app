import { StyleSheet, Text, Switch, Platform } from "react-native";

import Colors from "constants/colors";

interface Props {
	label: string;
	value: boolean;
	onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSwitch: React.FC<Props> = props => {
	return (
		<>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{
					true: Colors.primary,
				}}
				thumbColor={Platform.OS === "android" ? Colors.accent : ""}
				value={props.value}
				onValueChange={props.onChange}
			/>
		</>
	);
};

export default FilterSwitch;

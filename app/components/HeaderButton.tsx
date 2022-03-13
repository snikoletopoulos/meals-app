import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "constants/colors";

import { HeaderButton } from "react-navigation-header-buttons";

interface Props {
	title: string;
}

const CustomHeaderButton: React.FC<Props> = props => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === "android" ? "white" : Colors.primary}
		/>
	);
};

export default CustomHeaderButton;

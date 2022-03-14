import {
	NativeStackScreenProps,
	NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { useSelector } from "helpers/store";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { FavoritesParamList } from "navigation/FavoritesNavigator";

import HeaderButton from "components/HeaderButton";
import MealList from "components/MealList";

type Props = NativeStackScreenProps<FavoritesParamList, "FavoritesScreen">;

const FavoritesScreen: React.FC<Props> = props => {
	const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

	const navigate = (params: FavoritesParamList["MealScreen"]) => {
		props.navigation.navigate("MealScreen", params);
	};

	return <MealList meals={favoriteMeals} navigate={navigate} />;
};

export const screenOptions = (navigationData): NativeStackNavigationOptions => {
	return {
		headerTitle: "Your Favorites",
		headerLeft: props => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					color={props.tintColor}
					iconName="ios-menu"
					onPress={() => {
						navigationData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default FavoritesScreen;

import { ParamListBase } from "@react-navigation/native";
import {
	NativeStackNavigationOptions as LibNativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
	DrawerNavigationOptions as LibDrawerNavigationOptions,
	DrawerScreenProps,
} from "@react-navigation/drawer";
import {
	BottomTabNavigationOptions as LibBottomTabNavigationOptions,
	BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
	MaterialBottomTabNavigationOptions as LibMaterialBottomTabNavigationOptions,
	MaterialBottomTabScreenProps,
} from "@react-navigation/material-bottom-tabs";

export type NativeStackNavigationOptions<
	ParamList extends ParamListBase,
	RouteName extends keyof ParamList
> =
	| LibNativeStackNavigationOptions
	| ((
			props: NativeStackScreenProps<ParamList, RouteName> | any
	) => LibNativeStackNavigationOptions);

export type DrawerNavigationOptions<
	ParamList extends ParamListBase,
	RouteName extends keyof ParamList
> =
	| LibDrawerNavigationOptions
	| ((
			props: DrawerScreenProps<ParamList, RouteName>
	) => LibDrawerNavigationOptions);

export type BottomTabNavigationOptions<
	ParamList extends ParamListBase,
	RouteName extends keyof ParamList
> =
	| LibBottomTabNavigationOptions
	| ((
			props: BottomTabScreenProps<ParamListBase, RouteName>
	) => LibBottomTabNavigationOptions);

export type MaterialBottomTabNavigationOptions<
	ParamList extends ParamListBase,
	RouteName extends keyof ParamList
> =
	| LibMaterialBottomTabNavigationOptions
	| ((
			props: MaterialBottomTabScreenProps<ParamListBase, RouteName>
	) => LibMaterialBottomTabNavigationOptions);

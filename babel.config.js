// @ts-ignore
module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						components: "./app/components",
						assets: "./app/assets",
						navigation: "./app/navigation",
						screens: "./app/screens",
						data: "./app/data",
						models: "./app/models",
						constants: "./app/constants",
					},
				},
			],
			["react-native-reanimated/plugin"],
		],
	};
};

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
						store: "./app/store",
						types: "./app/types",
						helpers: "./app/helpers",
					},
				},
			],
			["react-native-reanimated/plugin"],
		],
	};
};

import { configureStore } from "@reduxjs/toolkit";

import mealsReducer from "store/meals/reducers";

const store = configureStore({
	reducer: {
		meals: mealsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

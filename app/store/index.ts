import { configureStore } from "@reduxjs/toolkit";

import mealsReducer from "store/meals/reducers";

const store = configureStore({
	reducer: {
		meals: mealsReducer,
	},
});

export default store;

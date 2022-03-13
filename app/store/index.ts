import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "store/favorites/reducers";

const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
	},
});

export default store;

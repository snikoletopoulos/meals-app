import { createSlice } from "@reduxjs/toolkit";

import { MEALS } from "data/dummy-data";
import Meal from "models/meal";

interface FavoritesState {
	meals: Meal[];
	filteredMeals: Meal[];
	favoriteMeals: Meal[];
}

const initialState: FavoritesState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

const favoritesSlice = createSlice({
	name: "meals",
	initialState,
	reducers: {},
});

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;

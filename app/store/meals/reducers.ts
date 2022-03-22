import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MEALS } from "data/dummy-data";
import Meal from "models/meal";

interface FavoritesState {
	meals: Meal[];
	filteredMeals: Meal[];
	favoriteMeals: Meal["id"][];
}

const initialState: FavoritesState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

const favoritesSlice = createSlice({
	name: "meals",
	initialState,
	reducers: {
		toggleFavourite: (state, { payload }: PayloadAction<Meal["id"]>) => {
			const mealIndex = state.meals.findIndex(meal => meal.id === payload);
			if (mealIndex) {
				state.favoriteMeals.splice(mealIndex, 1);
			} else {
				state.favoriteMeals.push(payload);
			}
		},
	},
});

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;

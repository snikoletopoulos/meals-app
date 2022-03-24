import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MEALS } from "data/dummy-data";
import Meal from "models/meal";
import { filterState } from "types/filters.types";

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
			const mealIndex = state.favoriteMeals.findIndex(meal => meal === payload);

			if (mealIndex >= 0) {
				state.favoriteMeals.splice(mealIndex, 1);
			} else {
				state.favoriteMeals.push(payload);
			}
		},

		setFilterts: (state, { payload }: PayloadAction<filterState>) => {
			state.filteredMeals = state.meals.filter(meal => {
				if (payload.isGlutenFree && !meal.isGlutenFree) {
					return false;
				}

				if (payload.isLactoseFree && !meal.isLactoseFree) {
					return false;
				}

				if (payload.isVegan && !meal.isVegan) {
					return false;
				}

				if (payload.isVegetarian && !meal.isVegetarian) {
					return false;
				}

				return true;
			});
		},
	},
});

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;

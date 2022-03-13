import { createSlice } from "@reduxjs/toolkit";

interface FavoritesState {}

const initialState: FavoritesState = {};

const favoritesSlice = createSlice({
	name: "meals",
	initialState,
	reducers: {},
});

export const actions = favoritesSlice.actions;
export default favoritesSlice.reducer;

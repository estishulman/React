import { combineSlices, configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipeSlice";
const rootReducer = combineSlices(recipesSlice)
const store = configureStore({
    reducer: rootReducer
});
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export default store;

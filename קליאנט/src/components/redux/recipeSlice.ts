import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Recipe } from '../Recipes';
import { FormDataType } from '../AddRecipe';
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
    const response = await axios.get('http://localhost:8787/api/recipes')
    return response?.data
})
export const addRecipe = createAsyncThunk("recipes/addRecipe", async ({ newRecipe, userId }: { newRecipe: FormDataType; userId: number }) => {
    try {
        const res = await axios.post('http://localhost:8787/api/recipes', newRecipe, {
            headers: {
                'user-id': userId
            }
        });
        return res.data;
    } catch (e) {
        alert('Failed to add recipe');
    }
});
const recipesSlice = createSlice({
    name: 'recipes',
    initialState: { recipes: [] as Recipe[] },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload;
        });
    },
});
export default recipesSlice;
import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name : "searchResultSlice",
    initialState:[],
    reducers:{
        addSearchResultToStore : (state,action) => {
            state = [ ...action.payload];
            return state;
        }
    }
})

export default searchResultSlice.reducer;

export const { addSearchResultToStore } = searchResultSlice.actions;
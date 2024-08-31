import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name : "cache" ,
    initialState :{

    },
    reducers:{
        cacheResults : (state,action)=>{
           return {...state , ...action.payload}
        } 
    }
})

export default cacheSlice.reducer;

export const {cacheResults} = cacheSlice.actions;
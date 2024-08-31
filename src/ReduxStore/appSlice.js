import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState : {
        menuVisibility : true
    },
    reducers : {
       toggleMenu : (state, action ) => {
            state.menuVisibility = !state.menuVisibility
       },
       openMenu :(state, action ) => {
        state.menuVisibility = true
        },
        closeMenu :(state, action ) => {
            state.menuVisibility = false
        },

    }
})

export default appSlice.reducer;
export const { toggleMenu , openMenu , closeMenu } = appSlice.actions;

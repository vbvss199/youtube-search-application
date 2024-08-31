import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import SearchResultSlice from "./SearchResultSlice";


const store = configureStore({
    reducer :{
        app: appSlice,
        cache:cacheSlice,
        searchResultSlice:SearchResultSlice,
    }
})

export default store;
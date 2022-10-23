import { configureStore } from "@reduxjs/toolkit";
import articlesReducers from "./slices/atriclesSlice";
import filtersReducers from "./slices/filtersSlice";

export const store = configureStore({
    reducer: {
        articlesReducers,
        filtersReducers,
    }
})
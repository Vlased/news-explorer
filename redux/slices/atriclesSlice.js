import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
}

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        setArticles: (state, { payload }) => {
            state.articles = payload
        }
    }
})

export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
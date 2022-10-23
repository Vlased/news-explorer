import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../constants/apiKey";
import { API_START } from "../../constants/apiStart";
import { setArticles } from "../slices/atriclesSlice";

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async (_, { dispatch, getState }) => {
        const { search } = getState().filtersReducers.filters;
        const searchValue = search.length ? search : "all";

        const { sorting } = getState().filtersReducers.filters

        const { time } = getState().filtersReducers.filters
        const timeFilterString = time.label === "All Time" ? "": `&from=${time.from}&to=${time.to}`;

        const url = `${API_START}?q=${searchValue}${timeFilterString}&sortBy=${sorting}&apiKey=${API_KEY}`;
        
        const articles = await fetch(url);
        const articlesData = await articles.json();

        dispatch(setArticles(articlesData.articles));
    },
)
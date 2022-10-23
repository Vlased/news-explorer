import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        search: "",
        sorting: "relevancy",
        time: {
            label: "All Time"
        }
    },
}

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearch: (state, { payload }) => {
            state.filters.search = payload
        },
        setSorting: (state, { payload }) => {
            state.filters.sorting = payload
        },
        setTime: (state, { payload }) => {
            state.filters.time = payload
        }
    }
})

export const { setSearch, setSorting, setTime } = filtersSlice.actions;

export default filtersSlice.reducer;
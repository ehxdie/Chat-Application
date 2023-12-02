import { createSlice } from "@reduxjs/toolkit";

// Setting up state for the the application theme
export const themeSlice = createSlice({
    name: "theme",
    initialState: true,
    reducers: {
        toggleTheme: (state) => {
            state = !state;
        }
    }
})

// getting the created action creators
export const { toggleTheme } = themeSlice.actions;
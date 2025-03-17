import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isFormOpen: false,
        focusedField: null, // state for focused field
    },
    reducers : {
        toggleForm: (state) => {
            state.isFormOpen = !state.isFormOpen;
        },
        closeForm: (state) => {
            state.isFormOpen = false;
        },
    },
});

// closeForm , setFocus, setBlur
export const { toggleForm, closeForm } = appSlice.actions;

export default appSlice.reducer;
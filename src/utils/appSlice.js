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
        // setFocus: (state, action) => {
        //     // set the focused field
        //     state.focusedOnline = action.payload;
        // },
        // setBlur: (state) => {
        //     // Reset the focus field
        //     state.focusedField = null;
        // }
    },
});

// closeForm , setFocus, setBlur
export const { toggleForm, closeForm } = appSlice.actions;

export default appSlice.reducer;
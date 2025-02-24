import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isFormOpen: false,
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

// closeForm
export const { toggleForm, closeForm } = appSlice.actions;

export default appSlice.reducer;
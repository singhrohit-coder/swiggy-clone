import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        emptyCartUrl: "https://cdn.dineorder.com/public/asset/img/cook.png", // URL for the empty cart image
    }, 
    reducers: {
        addItem: (state, action) => {
            // we're mutating/modifying our state here.
            state.items.push(action.payload)
        },
        // this reducer function will not need any action.
        removeItem: (state, action) => {
            // we're mutating/modifying our state here.
            state.items.pop();
        },
        // this reducer function will not need any action.
        clearCart: (state, action) => {
            // we're mutating/modifying our state here.
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

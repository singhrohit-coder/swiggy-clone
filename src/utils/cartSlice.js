import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // list of items in the cart
        emptyCartUrl: "https://cdn.dineorder.com/public/asset/img/cook.png", // Add image URL here
    }, 
    reducers: {
        addItem: (state, action) => {
            // we're mutating/modifying our state here.
            state.items.push(action.payload)
        },
        // this reducer function will not need any action.
        removeItem: (state, action) => {
            // we're mutating/modifying our state here.
            state.items = state.items.filter(
                (item) => item?.card?.info?.id !== action.payload.card?.info?.id
            )
        },
        // this reducer function will not need any action.
        clearCart: (state) => {
            // we're mutating/modifying our state here.
            state.items.length = 0;
        },
        seeRestaurantsNearYou: (state, action) => {
            state.restaurants = action.payload;  //update the list of restaurants, not the cart items
        }
    },
});

export const { addItem, removeItem, clearCart, seeRestaurantsNearYou } = cartSlice.actions;

export default cartSlice.reducer;

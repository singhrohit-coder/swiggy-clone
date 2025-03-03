import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // list of items in the cart
        emptyCartUrl: "https://cdn.dineorder.com/public/asset/img/cook.png", // Add image URL here
    }, 
    reducers: {
        // add an item to the cart or increase its quantity if it already exists
        addItem: (state, action) => {
        // check if the item is already in the cart    
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if (existingItem) {
                // if item is in the cart , increase the quantity
                existingItem.quantity += 1; // Increase quantity if item exists
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
            }
        },
        // increase the quantity of an item in the cart
        incrementCount: (state, action) => {
        // find the item in the cart by its ID
            const item = state.items.find(item => item.card.info.id === action.payload);
            if (item) {
                // increase its quantity
                item.quantity += 1;
            }
        },
        // decrease the quantity of an item , and remove it if the quantity reaches 0.
        decrementCount: (state, action) => {
            // Find the item in the cart by its ID
            const item = state.items.find(item => item.card.info.id === action.payload);
            if (item) {
                 // Reduce the quantity
                item.quantity -= 1;
                // If the quantity is 0, remove the item from the cart
                if (item.quantity === 0) {
                    state.items = state.items.filter(i => i.card.info.id !== action.payload);
                }
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.card.info.id !== action.payload);
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

export const { addItem, removeItem, incrementCount, decrementCount, clearCart, seeRestaurantsNearYou } = cartSlice.actions;

export default cartSlice.reducer;

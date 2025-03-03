import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // list of items in the cart
        emptyCartUrl: "https://cdn.dineorder.com/public/asset/img/cook.png", // Add image URL here
    }, 
    reducers: {
        // addItem: (state, action) => {
        //     // we're mutating/modifying our state here.
        //     state.items.push(action.payload)
        // },
        // incrementCount: (state, action) => {
        //     const itemId = action.payload;
        //     // if item is match with the id it will be stored.
        //     const item = state.items.find((cartItem) => cartItem.id === itemId);

        //     if (item) {
        //         // If the item is found, increase its quantity by 1
        //         item.quantity += 1;
        //     }
        // },
        // decrementCount: (state, action) => {
        //     const itemId = action.payload;
        //     const item = state.items.find((cartItem) => cartItem.id === itemId);

        //     if (item) {
        //         // If the item's quantity is 1, remove it from the cart
        //         if (item.quantity === 1) {
        //             state.items = state.items.filter((cartItem) => cartItem.id !== itemId);
        //         } else {
        //             // Otherwise, decrease the quantity by 1
        //             item.quantity -= 1;
        //         }
        //     }
        // },

        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementCount : (state, action) => {
            const item = state.items.find(item => item.card.info.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementCount: (state, action) => {
            const item = state.items.find(item => item.card.info.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.card.info.id !== action.payload);
                }
            }
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

export const { addItem, removeItem, incrementCount, decrementCount, clearCart, seeRestaurantsNearYou } = cartSlice.actions;

export default cartSlice.reducer;

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
          // Simply push the action payload with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
        },
        // increase the quantity of an item in the cart
        incrementCount: (state, action) => {
        // Find the item and increase its quantity
        const item = state.items.find(item => item.card.info.id === action.payload);
        item && (item.quantity += 1); // If item exists, increment its quantity

        },
        // decrease the quantity of an item , and remove it if the quantity reaches 0.
        decrementCount: (state, action) => {
            // Find the item in the cart and decrement its quantity
            const item = state.items.find(item => item.card.info.id === action.payload);
            
            // Decrement the quantity and remove the item if quantity is 0
            item && (item.quantity -= 1);
            item?.quantity === 0 && (state.items = state.items.filter(i => i.card.info.id !== action.payload));
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

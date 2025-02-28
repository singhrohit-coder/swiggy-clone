import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import appSlice from "./appSlice"

const appStore = configureStore({
    reducer: {
        app: appSlice,
        cart: cartReducer,
    },
});

export default appStore;
import {configureStore} from "@reduxjs/toolkit";
import BookSlice from "../Slices/BookSlice.ts";
import AddToCartSlice from "../Slices/AddToCartSlice.ts";
import paymentSlice from "../Slices/PaymentSlice.ts";
import userSlice from "../Slices/UserSlice.ts";

export const store = configureStore({
    reducer:{
        bookData : BookSlice,
        addToCard : AddToCartSlice,
        payment : paymentSlice,
        userData: userSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { getState } = store;
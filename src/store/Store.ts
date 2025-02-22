import {configureStore} from "@reduxjs/toolkit";
import BookSlice from "../Slices/BookSlice.ts";
import AddToCartSlice from "../Slices/AddToCartSlice.ts";
import paymentSlice from "../Slices/PaymentSlice.ts";

export const store = configureStore({
    reducer:{
        bookData : BookSlice,
        addToCard : AddToCartSlice,
        payment : paymentSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
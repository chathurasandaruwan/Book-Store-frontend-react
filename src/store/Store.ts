import {configureStore} from "@reduxjs/toolkit";
import BookSlice from "../Slices/BookSlice.ts";
import AddToCartSlice from "../Slices/AddToCartSlice.ts";
import userSlice from "../Slices/UserSlice.ts";
import paymentSlice from "../Slices/PaymentSlice.ts";

export const store = configureStore({
    reducer:{
        userData: userSlice,
        payment : paymentSlice,
        bookData : BookSlice,
        addToCard : AddToCartSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { getState } = store;
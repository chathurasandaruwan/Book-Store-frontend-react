import {configureStore} from "@reduxjs/toolkit";
import BookSlice from "../Slices/BookSlice.ts";
import AddToCartSlice from "../Slices/AddToCartSlice.ts";

export const store = configureStore({
    reducer:{
        bookData : BookSlice,
        addToCard : AddToCartSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
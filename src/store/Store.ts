import {configureStore} from "@reduxjs/toolkit";
import BookSlice from "../Slices/BookSlice.ts";

export const store = configureStore({
    reducer:{
        bookData : BookSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
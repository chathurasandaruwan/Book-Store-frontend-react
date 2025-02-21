import {AddToCart} from "../interface/AddToCart.ts";
import {createSlice} from "@reduxjs/toolkit";


const initialState: AddToCart[] = [];

const AddToCartSlice = createSlice({
    name: "addToCart",
    initialState:{
        value: initialState,
        loading: false,
    },
    reducers: {
        addToCart: (state, action) => {
            state.loading = true
            state.value.push(action.payload);
            state.loading = false
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
            return state
        },
    },
});

export const {addToCart,removeFromCart} = AddToCartSlice.actions;
export default AddToCartSlice.reducer
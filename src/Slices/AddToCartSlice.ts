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
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            state.value = state.value.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity };
                }
                return item;

            });
        },
    },
});

export const {addToCart,removeFromCart,updateQuantity} = AddToCartSlice.actions;
export default AddToCartSlice.reducer
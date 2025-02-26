import {AddToCart} from "../interface/AddToCart.ts";
import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";


const initialState: AddToCart[] = [];

const AddToCartSlice = createSlice({
    name: "addToCart",
    initialState:{
        value: initialState,
    },
    reducers: {
        addToCart: (state, action) => {
            state.value.push(action.payload);
            toast.success("Added to cart successfully!");
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
            toast.success("Removed from cart successfully!");
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
        setEmptyCart: (state) => {
            state.value = initialState
        },
    },
});

export const {addToCart,removeFromCart,updateQuantity,setEmptyCart} = AddToCartSlice.actions;
export default AddToCartSlice.reducer
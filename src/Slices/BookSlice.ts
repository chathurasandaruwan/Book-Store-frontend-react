import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Book} from "../interface/Book.ts";
import axios from "axios";
import { toast } from "react-toastify";

const initialState : Book[] = [];

const api = axios.create({
    baseURL : "http://localhost:3000/book"
});
// connect with database
// get All books
export const getBooksData = createAsyncThunk(
    'book/getBook',
    async (_,{ rejectWithValue })=>{
        //set delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            const response = await api.get('/all');
            return response.data;
        }catch (error:any) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
)
//slice manage
const BookSlice = createSlice({
    name: "book",
    initialState: {
        books : initialState,
        loading: false,
    },
    reducers: {

    },
    extraReducers:(builder)=>{
        builder
            .addCase(getBooksData.fulfilled,(state, action)=>{
                state.loading = false
                state.books = action.payload;
                return state;
            })
            .addCase(getBooksData.pending,(state)=>{
                state.loading = true
            })
            .addCase(getBooksData.rejected,(state, action)=>{
                toast.error(`Failed to get book: ${action.payload}`);
                state.loading = false
            });
    }
})

// export const {}=BookSlice.actions

export default BookSlice.reducer
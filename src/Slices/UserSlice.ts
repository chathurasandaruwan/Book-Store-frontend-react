
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "../interface/User.ts";
import {toast} from "react-toastify";
const initialUser : User = {id:"",email: "", password: "", role: "user"};

const initialState = {
    jwt_token: null,
    refresh_token : null,
    username: null,
    isAuthenticated: false,
    loading: false,
    userDetail:initialUser,
};

const api = axios.create({
    baseURL : "http://localhost:3000"
})

export const registerUser= createAsyncThunk(
    'user/register',
    async (user : User,{ rejectWithValue })=>{
        try{
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await api.post('/auth/register', {user},{withCredentials: true});
            return response.data;
        }catch(err:any){
            return rejectWithValue(err.response?.data || "Signup Failed");
        }
    }
)

export const loginUser= createAsyncThunk(
    'user/login',
    async (user : User,{ rejectWithValue })=>{
        try{
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await api.post('/auth/login', {user},{withCredentials: true});
            return response.data;
        }catch(err:any){
            return rejectWithValue(err.response?.data || "Login Failed");
        }
    }
)
const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(registerUser.pending,(state)=>{
                state.isAuthenticated = false;
                state.loading = true;
            })
            .addCase(registerUser.fulfilled,(state, action)=>{
                state.jwt_token = action.payload.accessToken;
                state.isAuthenticated = true;
                state.loading = false;
                state.userDetail = action.payload.user;
            })
            .addCase(registerUser.rejected,(state, action)=>{
                toast.error(`Failed to register: ${action.payload}`);
                state.isAuthenticated = false;
                state.loading = false;
            });
        builder
            .addCase(loginUser.rejected,(state, action)=>{
                toast.error(`Failed to login: ${action.payload}`);
                state.isAuthenticated = false;
                state.loading = false;
            })
            .addCase(loginUser.fulfilled,(state, action)=>{
                state.jwt_token = action.payload.accessToken;
                state.refresh_token = action.payload.refreshToken;
                state.isAuthenticated = true;
                state.loading = false;
                state.userDetail = action.payload.user;
            })
            .addCase(loginUser.pending,(state)=>{
                state.isAuthenticated = false;
                state.loading = true;
            })

    }
});
export default userSlice.reducer;

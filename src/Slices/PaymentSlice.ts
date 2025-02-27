import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Stripe} from "@stripe/stripe-js"
import {toast} from "react-toastify";
import {RootState} from '../store/Store';

/*export const createPaymentIntent = createAsyncThunk("payment/createPaymentIntent", async ({ amount, metadata }: { amount: number; metadata: any }, { rejectWithValue }) => {
    if (metadata.books === undefined || metadata.books.length === 0) return
    const state: RootState = getState();
    const token = state.userData.jwt_token;
    try {
        const response = await fetch("http://localhost:3000/api/payments/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json","Authorization": `Bearer ${token}` },
            body: JSON.stringify({
                amount: amount,
                currency: "usd",
                metadata: metadata
            }),
        })
        const data = await response.json()
        return data.clientSecret
    } catch (error) {
        return rejectWithValue("Failed to create payment intent")
    }
})*/
export const createPaymentIntent = createAsyncThunk(
    "payment/createPaymentIntent",
    async ({ amount, metadata }: { amount: number; metadata: any }, { rejectWithValue, getState }) => {
        if (!metadata.books || metadata.books.length === 0) return;

        const state: RootState = getState() as RootState;
        const token = state.userData.jwt_token;

        try {
            const response = await fetch("http://localhost:3000/api/payments/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    amount: amount,
                    currency: "usd",
                    metadata: metadata
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create payment intent");
            }

            const data = await response.json();
            return data.clientSecret;
        } catch (error) {
            return rejectWithValue("Failed to create payment intent");
        }
    }
);

export const confirmCardPayment = createAsyncThunk(
    "payment/confirmCardPayment",
    async (
        { stripe, clientSecret, cardElement }: { stripe: Stripe; clientSecret: string; cardElement: any },
        { rejectWithValue }
    ) => {
        try {
            if (!stripe) throw new Error("Stripe instance not found")

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                },
            })

            if (result.error) {
                throw new Error(result.error.message)
            }

            return "Payment successful!"
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : "Payment failed")
        }
    },
)

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        loading: false,
        error: null as string | null,
        clientSecret: null as string | null,
        isSuccess: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPaymentIntent.pending, (state) => {
                state.loading = true
                state.error = null
                state.isSuccess = false
            })
            .addCase(createPaymentIntent.fulfilled, (state, action) => {
                state.loading = false
                state.clientSecret = action.payload
                state.isSuccess = false
            })
            .addCase(createPaymentIntent.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
                state.isSuccess = false
            })
            .addCase(confirmCardPayment.pending, (state) => {
                state.loading = true
                state.error = null
                state.isSuccess = false
            })
            .addCase(confirmCardPayment.fulfilled, (state) => {
                state.loading = false
                state.isSuccess = true
                toast.success("Order placed successfully!");
            })
            .addCase(confirmCardPayment.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
                state.isSuccess = false
                toast.error(`Failed to place order: ${action.payload}`);
            })
    },
})

export default paymentSlice.reducer

